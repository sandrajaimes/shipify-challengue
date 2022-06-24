const { getSummaryClientByIdAndDates } = require('../services/client.service')
const { Client } = require('../repository');

const getSummaryClients = async (dateRange) => {
    let summaryClients = [];
    const getAllClients = await Client.getAllClients();
    for(let i=0; i < getAllClients.length; i++){
        const dataClient = await getSummaryClientByIdAndDates(getAllClients[i].id, dateRange)
        summaryClients.push({
            name: getAllClients[i].firstName,
            lastName: getAllClients[i].lastName,
            summary: dataClient
        })
    }
    return summaryClients
};

module.exports = {
    getSummaryClients
};
