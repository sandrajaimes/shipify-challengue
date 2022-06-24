const Joi = require('joi')
const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync');
const { companyService } = require('../services');
const { paramsGetSummary } = require('../controllers/validationSchema/params-get-summary')

const getSummaryClients= catchAsync(async (req, res) => {
    const { error2 } = Joi.object(paramsGetSummary).validate(req.query)

    if(error2){
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `${error2?.details[0]?.message}`
        });
    }

    const result = await companyService.getSummaryClients({dateStart: new Date(req.query.dateStart), dateEnd: new Date(req.query.dateEnd)});
    res.send(result);
});

module.exports = {
    getSummaryClients
};
