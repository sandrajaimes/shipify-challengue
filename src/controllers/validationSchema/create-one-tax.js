const Joi = require('joi')

const addNewTax = {
    name: Joi.string().max(100).required(),
    value: Joi.number().required()
}

module.exports = {
    addNewTax
}
