// Import
const express = require('express');
//Je crée le routeur avec la fonction Router d'express
const router = express.Router();
//J'associe les fonctions aux différentes routes avec le controleur
const userCtrl = require('../controllers/user');
const passValidate = require('../middleware/passValidate');
const mailValidate = require('../middleware/mailValidate');
const rateLimit = require("express-rate-limit");
const auth = require('../middleware/auth');

const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, 
  max: 5, // 
  message: " Trop de tentatives échouées, réessayez dans 5 minutes",
});


// Routes
//Je crée deux routes post parce que le frontend doit envoyer des informations(adresse mail et mot de passe)
router.post('/signup', mailValidate, passValidate, userCtrl.signup);
router.post('/login', rateLimiter, userCtrl.login);

router.delete('/:id', userCtrl.delete);
router.put('/:id', auth, userCtrl.update);
//J'exporte ce routeur pour pouvoir l'importer sur app.js
module.exports = router;


