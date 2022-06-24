const Joi = require('joi')

const oneClientId = {
    id: Joi.number()
        .required(),
}

module.exports = {
    oneClientId
}
