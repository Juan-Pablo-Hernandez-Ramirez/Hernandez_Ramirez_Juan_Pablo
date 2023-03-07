const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.get('/login', LoginController.index);
router.post('/login', LoginController.auth);

router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);

router.get('/logout', LoginController.logout);
router.post('/login', LoginController.logout);

module.exports = router;