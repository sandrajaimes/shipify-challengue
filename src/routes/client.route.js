const express = require('express');
const clientController = require('../controllers/client.controllers');

const router = express.Router();

router.get('/client/summary/:id', clientController.getSummaryClientByIdAndDates)

module.exports = router;
