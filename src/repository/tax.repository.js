const models = require('../data/models/index')
const taxModel = models.Tax;

const getTaxes = () => {
    return taxModel.findAll();
};

module.exports = {
    getTaxes
};
