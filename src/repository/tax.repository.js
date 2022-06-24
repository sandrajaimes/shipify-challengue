const models = require('../data/models/index')
const taxModel = models.Tax;

const getTaxes = () => {
    return taxModel.findAll({
        where: {
            active: true
        }
    });
};

const createNewTax = (data) => {
    return taxModel.create({
        ...data
    });
};

const getOneTaxById = (idTax) => {
    return taxModel.findOne({
        where: {
            id: idTax
        }
    });
};

const getOneTaxByName = (nameTax) => {
    return taxModel.findOne({
        where: {
            name: nameTax
        }
    });
};

const updateOneTaxById = (idTax, data) => {
    return taxModel.update({
        ...data
    },{
        where: {
            id: idTax
        },
    });
};

module.exports = {
    getTaxes,
    createNewTax,
    getOneTaxById,
    updateOneTaxById
};
