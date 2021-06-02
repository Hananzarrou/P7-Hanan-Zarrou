const schema = require("../models/password");

module.exports = (req, res, next) => {
    
    if (!schema.validate(req.body.password)) {

      res.status(401).json({
        error: ('Votre mot de pass est faible!')
      });
    
     
    } else {
     
      next();
    }
  };