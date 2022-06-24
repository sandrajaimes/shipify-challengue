const express = require('express');
const companyController = require('../controllers/company.controllers');

const router = express.Router();

router.get('/company/clients/summary', companyController.getSummaryClients)

module.exports = router;
