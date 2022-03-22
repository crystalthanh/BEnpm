let Joi = require('@hapi/joi')

const createUser = Joi.object({
    fullName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phoneNumber: Joi.string().min(10).max(10).regex(/[{0,1}[0-9]{9}]*$/)
});



module.exports = {
    createUser
}