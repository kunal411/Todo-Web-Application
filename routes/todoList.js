const express = require('express');

const router = express.Router();
const userController = require('../controllers/UserListController');

router.post('/create-todo', userController.addList);
router.get('/delete-item', userController.deleteList);
module.exports = router;