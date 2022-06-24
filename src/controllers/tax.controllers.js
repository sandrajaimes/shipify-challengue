const Joi = require('joi')
const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync');
const { taxService } = require('../services');
const { oneTaxId } = require('../controllers/validationSchema/get-one-tax-schema')
const { dataUpdateOneTaxById } = require('../controllers/validationSchema/data-update-one-tax-by-id')
const { addNewTax } = require('../controllers/validationSchema/create-one-tax')

const getTaxes = catchAsync(async (req, res) => {
    const result = await taxService.getTaxes();
    res.send(result);
});

const createNewTax = catchAsync(async (req, res) => {
    if(Object.keys(req.body).length === 0){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: "Al menos 1 key debe ser enviada"
        });
    }

    const { error } = Joi.object(addNewTax).validate(req.body)

    if(error){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `${error?.details[0]?.message}`
        });
    }

    const saveTax = await taxService.createNewTax(req.body);

    if(!saveTax){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: `Internal Server Error`
        });
    }

    return res.status(httpStatus.CREATED).send({
        success: true,
        status: httpStatus.CREATED,
        message: `Su tax fue creado con exito`
    });
});

const getOneTaxById = catchAsync(async (req, res) => {
    const { error } = Joi.object(oneTaxId).validate(req.params)

    if(error){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `${error?.details[0]?.message}`
        });
    }

    const result = await taxService.getOneTax(req.params.id);
    res.send(result);
});

const updateOneTaxById = catchAsync(async (req, res) => {
    const { error } = Joi.object(oneTaxId).validate(req.params)

    if(Object.keys(req.body).length === 0){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: "Al menos 1 key debe ser enviada"
        });
    }

    const { error2 } = Joi.object(dataUpdateOneTaxById).validate(req.body)

    if(error || error2){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `${error?.details[0]?.message}` || `${error2?.details[0]?.message}`
        });
    }

    const checkIfIdTaxExist = await taxService.getOneTaxById(parseInt(req.params.id));

    if(!checkIfIdTaxExist){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `El tax id: ${req.params.id} es incorrecto`
        });
    }

    const result = await taxService.updateOneTaxById(parseInt(req.params.id), req.body);

    if(!result){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: `Internal Server Error`
        });
    }

    return res.status(httpStatus.CREATED).send({
        success: true,
        status: httpStatus.CREATED,
        message: `El tax con id: ${req.params.id} fue actualizado con exito`
    });
});

const deleteOneTaxById = catchAsync(async (req, res) => {
    const { error } = Joi.object(oneTaxId).validate(req.params)

    if(error){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `${error?.details[0]?.message}`
        });
    }

    const checkIfIdTaxExist = await taxService.getOneTaxById(parseInt(req.params.id));

    if(!checkIfIdTaxExist){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `El tax id: ${req.params.id} es incorrecto`
        });
    }

    const result = await taxService.deleteOneTaxById(parseInt(req.params.id));

    if(!result){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: `Internal Server Error`
        });
    }

    return res.status(httpStatus.CREATED).send({
        success: true,
        status: httpStatus.CREATED,
        message: `El tax con id: ${req.params.id} fue eliminado`
    });
});

module.exports = {
    getTaxes,
    createNewTax,
    getOneTaxById,
    updateOneTaxById,
    deleteOneTaxById
};
