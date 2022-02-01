const controller = require('../controller/customer');

const express = require('express');
const router = express.Router();

router.get('/',controller.getAllCustomers);

module.exports = router;