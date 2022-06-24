const models = require('../data/models/index')
const clientModel = models.Client;
const movementsModel = models.Movements

const getSummaryClientByIdAndDates = (idClient, where) => {
    return movementsModel.findAll({
        ...where
    });
};

const getClientById = (idClient) => {
    return clientModel.findOne({
        where: {
            id: idClient
        }
    })
}

module.exports = {
    getSummaryClientByIdAndDates,
    getClientById

};
