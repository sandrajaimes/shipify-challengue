const { Tax } = require('../repository');

const getTaxes = async () => {
    return Tax.getTaxes();
};

const createNewTax = async (data) => {
    return Tax.createNewTax({
        name: data.name,
        value: data.value
    });
};

const getOneTaxById = async (idTax) => {
    return Tax.getOneTaxById(idTax);
};

const updateOneTaxById = async (idTax, data) => {
    return Tax.updateOneTaxById(idTax, {
        value: data.value
    });
};

const deleteOneTaxById = async (idTax) => {
    return Tax.updateOneTaxById(idTax, {
        active: false
    });
};

module.exports = {
    getTaxes,
    createNewTax,
    getOneTaxById,
    updateOneTaxById,
    deleteOneTaxById

};
