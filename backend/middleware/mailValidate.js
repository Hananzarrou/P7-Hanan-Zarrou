const validateMail = require("email-validator");

validateMail.validate("test@email.com");

module.exports = (req, res, next) => {
    
    if (!validateMail.validate(req.body.email)) {

      res.status(401).json({
        error: ('Saisir un email valide : hanan@gmail.com !')
      });
    
     
    } else {
     
      next();
    }
  };