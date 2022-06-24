const Joi = require('joi')
const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync');
const { clientService } = require('../services');
const { oneClientId } = require('../controllers/validationSchema/get-one-client-schema')
const { paramsGetSummary } = require('../controllers/validationSchema/params-get-summary')

const getSummaryClientByIdAndDates = catchAsync(async (req, res) => {
    const { error } = Joi.object(oneClientId).validate(req.params)

    const { error2 } = Joi.object(paramsGetSummary).validate(req.query)

    if(error || error2){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `${error?.details[0]?.message}` || `${error2?.details[0]?.message}`
        });
    }

    console.log('==>', {dateStart: new Date(req.query.dateStart), dateEnd: new Date(req.query.dateEnd)})

    const result = await clientService.getSummaryClientByIdAndDates(parseInt(req.params.id),
        {dateStart: new Date(req.query.dateStart), dateEnd: new Date(req.query.dateEnd)});
    res.send(result);
});

module.exports = {
    getSummaryClientByIdAndDates
};
