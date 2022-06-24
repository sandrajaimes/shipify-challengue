const models = require('../data/models/index')
const visitClientModel = models.VisitClient

const getVisitClientById = (idClient) => {
    return visitClientModel.findAll({
        where: {
            client_id: idClient
        }
    });
};


module.exports = {
    getVisitClientById
};
