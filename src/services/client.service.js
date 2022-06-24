const moment = require('moment')
const { Op } = require('sequelize');
const { Client, Tax, CommissionClient, VisitClient } = require('../repository');

const getSummaryClientByIdAndDates = async (idClient, dateRange) => {

    const allMovements = await Client.getSummaryClientByIdAndDates(idClient, {
        where: {
            client_id: idClient,
            createdAt: {
                [Op.between]: [dateRange.dateStart, dateRange.dateEnd]
            }
        }
    });
    const getCommissionActualClient = await CommissionClient.getCommissionClientById(idClient);
    const getVisitBankClient = await VisitClient.getVisitClientById(idClient);
    const getDataClient = await Client.getClientById(idClient);
    const getPriceIvaValue = await Tax.getOneTaxById(1);
    const getCommissionValue = await Tax.getOneTaxById(2);
    const getInsuranceBasePrice = await Tax.getOneTaxById(3);
    const getServicePercentageLessThanFour = await Tax.getOneTaxById(4);
    const getServicePercentageMoreThanFour = await Tax.getOneTaxById(5);
    const summaryClient = allMovements.reduce((current, next) => {
        return current + next.amount
    }, 0)
    const ivaClient = summaryClient * getPriceIvaValue.value / 100;

    let percentageCommissionClient, basePrice = 0, percentageCommissionClientFinally = 0;
    const insuranceClient = (summaryClient * getInsuranceBasePrice.value / 100)

    if(summaryClient > 100.00){
        const currentMonth = parseInt(moment(new Date(), 'YYYY/MM/DD').format('M'));
        const lastCommissionMonth = parseInt(moment(getCommissionActualClient.updatedAt, 'YYYY/MM/DD').format('M'))
        const totalMonthsWithTheAccount = moment(new Date(), 'YYYY/MM/DD').diff(moment(getDataClient.bank_account_creation_date, 'YYYY/MM/DD'), 'months');

        if(lastCommissionMonth < currentMonth || getCommissionActualClient.commission === 0.00){
            percentageCommissionClient = getCommissionActualClient.commission + (getCommissionValue.value * totalMonthsWithTheAccount)
            await CommissionClient.updateCommissionClientById(idClient, {
                commission: percentageCommissionClient
            })
        }

        percentageCommissionClientFinally = percentageCommissionClient ? percentageCommissionClient : getCommissionActualClient.commission;

        basePrice = ivaClient + (summaryClient * percentageCommissionClientFinally  / 100)

        basePrice = basePrice + insuranceClient
    }

    basePrice = basePrice + (summaryClient * getServicePercentageLessThanFour.value / 100)

    if(getVisitBankClient.length > 4){
        basePrice = basePrice + (getServicePercentageMoreThanFour.value * (getVisitBankClient.length - 4))
    }

    const totalSummaryAccount = summaryClient > 0 ? summaryClient - basePrice : 0;
    return  {
        amount: summaryClient.toFixed(2),
        iva: ivaClient.toFixed(2),
        commission: (summaryClient * percentageCommissionClientFinally  / 100).toFixed(2),
        insurance: insuranceClient.toFixed(2),
        service: (getVisitBankClient.length > 4 ?
            ((summaryClient * getServicePercentageLessThanFour.value / 100) + (getServicePercentageMoreThanFour.value * (getVisitBankClient.length - 4)))
            : (summaryClient * getServicePercentageLessThanFour.value / 100)).toFixed(2),
        totalSummaryAccount: totalSummaryAccount.toFixed(2)
    };
};

module.exports = {
    getSummaryClientByIdAndDates
};
