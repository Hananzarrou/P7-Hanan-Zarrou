const schema = require("../models/password");

module.exports = (req, res, next) => {
    
    if (!schema.validate(req.body.password)) {

      res.status(401).json({
        error: (' Veuillez saisir un mot de passe valide car Votre mot de pass est faible!')
      });
    
     
    } else {
     
      next();
    }
  };