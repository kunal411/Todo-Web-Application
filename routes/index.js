const express = require('express');

const router = express.Router();
const SignController = require('../controllers/sign_in_up_controller');
console.log('Router Loaded');

router.get('/', SignController.login);

module.exports = router;