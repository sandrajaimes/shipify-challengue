const express = require('express');
const taxController = require('../controllers/tax.controllers');

const router = express.Router();

router.get('/taxes', taxController.getTaxes)
router.post('/taxes', taxController.createNewTax)
router.get('/taxes/:id', taxController.getOneTaxById)
router.put('/taxes/:id', taxController.updateOneTaxById)
router.delete('/taxes/:id', taxController.deleteOneTaxById)

module.exports = router;
