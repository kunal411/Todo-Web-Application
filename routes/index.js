const express = require('express');

const router = express.Router();
console.log('Router Loaded');

router.use('/', require('./users'));
module.exports = router;