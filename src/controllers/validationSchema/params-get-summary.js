const Joi = require('joi')

const paramsGetSummary = {
    dateStart: Joi.date().required(),
    dateEnd: Joi.date().required()
}

module.exports = {
    paramsGetSummary
}
