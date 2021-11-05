const Joi = require('joi');

const joiSchema = Joi.object({
    firstname: Joi.string()
    .min(3)
    .max(50)
    .required(),
    lastname: Joi.string()
    .required()
    .min(3)
    .max(50),
    email: Joi.string()
    .email({ tlds: { allow: false } }),
    age: Joi.number()
    .min(0)
    .max(150),
    password: Joi.string()
    .min(8)
    .max(100)
});

module.exports  = joiSchema;