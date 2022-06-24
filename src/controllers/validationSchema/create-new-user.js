const Joi = require('joi')

const newUser = {
    firstName: Joi.string()
        .min(3)
        .max(50)
        .required(),

    lastName: Joi.string()
        .min(3)
        .max(30)
        .required(),

    birthdate: Joi.date(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
}

module.exports = {
    newUser
}
