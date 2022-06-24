const Joi = require('joi')

const oneTaxId = {
    id: Joi.number()
        .required(),
}

module.exports = {
    oneTaxId
}
