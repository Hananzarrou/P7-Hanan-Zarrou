// Import
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

const passValidate = require('../middleware/passValidate');
const mailValidate = require('../middleware/mailValidate');
const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, 
  max: 5, // 
  message: " Trop de tentatives échouées, réessayez dans 5 minutes",
});


// Routes

//router.post('/signup', mailValidate, passValidate, userCtrl.signup);
router.post('/signup',  userCtrl.signup);
router.post('/login', rateLimiter, userCtrl.login);
router.put('/:id', auth, multer, userCtrl.update);
router.delete('/:id', auth, userCtrl.delete);

module.exports = router;
