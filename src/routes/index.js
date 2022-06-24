const express = require('express');
const taxRoute = require('../routes/tax.route');

const router = express.Router();

router.use(taxRoute)

module.exports = router;
