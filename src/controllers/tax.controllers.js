const httpStatus = require('http-status');
const Joi = require('joi')
const catchAsync = require('../utils/catchAsync');
const { taxService } = require('../services');
const { newUser } = require('../controllers/validationSchema/create-new-user')
const moment = require('moment');

const getTaxes = catchAsync(async (req, res) => {
    const result = await taxService.getTaxes();
    res.send(result);
});
/*
const createUser = catchAsync(async (req, res) => {
    const { error } = Joi.object(newUser).validate(req.body)

    if(error){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `${error?.details[0]?.message}`
        });
    }

    const checkUserByEmail = await userService.searchUserByEmail(req.body.email)

    if(checkUserByEmail){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `Email exist`
        });
    }

   if(!moment(`${req.body.birthdate}`, 'YYYY-MM-DD HH:mm:ss', true).isValid()){
       return res.status(httpStatus.BAD_REQUEST).send({
           success: false,
           status: httpStatus.BAD_REQUEST,
           message: `Birthdate invalid`
       });
   }

    const user = await userService.createUser(req.body);

    if(user){
        return res.status(httpStatus.CREATED).send({
            success: true,
            status: httpStatus.CREATED,
            message: `Registro completado con exito`
        });
    }
});*/

module.exports = {
    createUser,
    getUsers
};
