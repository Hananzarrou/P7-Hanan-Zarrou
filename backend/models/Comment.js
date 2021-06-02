const schema = require("../models/password");

module.exports = (req, res, next) => {
    
    if (!schema.validate(req.body.password)) {

      res.status(401).json({
        error: ('Mot de passe faible !')
      });
    
     
    } else {
     
      next();
    }
  };

/*const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number,},
    dislikes: { type: Number,},
    usersLiked: { type: Array},
    usersDisliked: { type: Array},
});

module.exports = mongoose.model('Sauce', sauceSchema);*/