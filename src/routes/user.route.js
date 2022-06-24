const express = require('express');
const userController = require('src/controllers/tax.controllers');

const router = express.Router();

router.post('/users', userController.createUser)
router.get('/users', userController.getUsers)

module.exports = router;
