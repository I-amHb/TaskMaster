const express = require('express');
const router = express.Router();

const { validateRegister, validateLogin } = require('../validator/authValidator')
const { registerUser, loginUser, getUsers, getUserById } = require('../controllers/userController');

router.post('/register', validateRegister, registerUser);

router.post('/login', validateLogin, loginUser);

router.get('/', getUsers);

router.get('/:id', getUserById);

module.exports = router;