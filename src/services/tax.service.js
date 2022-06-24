const { Tax } = require('../repository');

const getTaxes = async () => {
    return Tax.queryUsers();
};

module.exports = {
    getTaxes,
};
