const express = require('express');
const taxRoute = require('../routes/tax.route');
const clientRoute = require('../routes/client.route');

const router = express.Router();

router.use(taxRoute)
router.use(clientRoute)

module.exports = router;
