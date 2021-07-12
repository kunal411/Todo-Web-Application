const express = require('express');

const router = express.Router();
const userController = require('../controllers/UserListController');

router.get('/mytodoList', userController.todoList);
router.use('/mytodoList', require('./todoList'));
module.exports = router;