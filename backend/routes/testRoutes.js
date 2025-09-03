const express = require('express');
const router = express.Router();
const { greetHello } = require('../controllers/testController');

router.get('/hello', greetHello);

module.exports = router;