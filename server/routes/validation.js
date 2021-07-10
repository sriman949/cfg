const Joi = require('joi');

 

 const registerValidation = (body) => {
    const schema = Joi.object({
        name : Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
     })

    return schema.validate(body);
    };
module.exports.registerValidation = registerValidation;

const loginValidation = (body) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
     })

    return schema.validate(body);
    };

    module.exports.loginValidation = loginValidation;