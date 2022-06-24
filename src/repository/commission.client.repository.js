const models = require('../data/models/index')
const commissionClientModel = models.CommissionClient

const getCommissionClientById = (idClient) => {
    return commissionClientModel.findOne({
        where: {
            client_id: idClient
        }
    });
};

const updateCommissionClientById = (idClient, data) => {
    return commissionClientModel.update(data, {
        where: {
            client_id: idClient
        }
    });
};

module.exports = {
    getCommissionClientById,
    updateCommissionClientById
};
