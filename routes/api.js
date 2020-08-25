'use strict';

const express = require('express');

const router = express.Router();

const apiControllers = require('../controllers/api');

// GET api/customers
router.get('/customers', apiControllers.customers);

module.exports = router;
