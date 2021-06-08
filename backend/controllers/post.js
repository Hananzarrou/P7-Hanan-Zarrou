const db = require ("../models/index");
const Op = db.Sequelize.Op;
const Post = db.post;

exports.createPost = (req, res, next) => {
// Analyse le post en utilisant une chaîne de caractères
if(req.body.content == null) {
  return res.status(400).send({
    message: "Votre message ne peut pas être vide"
  });
}
  const post= new Post({
    content: req.body.content,
    userId: req.body.userId,
        
});
console.log(req.body);
//Enregistre le post dans la base de données
 Post.createPost(post)
    .then(()=> res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ message: "erreur post controller"} ));
};

exports.findAll = (req,res) => {
  const content = req.query.content;
 
  Post.findAll.then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Une erreur s'est produite lors de la récupération"
    });
  });
};

exports.findOne = (req, res, next) => {
  const id = req.params.id;

  Post.findById(id)
  .then(data => {
    if (!data)
    res.status(404).send({ message: "Post non trouvé avec l'id" + id});
    else res.send(data);
  })
  .catch(err => {
    res
    .status(500)
    .send({ message: "Impossible de générer le post avec l'id" +id});
  });
};
exports.modifyPost = (req, res, next) => {
 
if(!req.body) {
  return res.status(400).send({
    message: "Votre message ne peut pas être vide"
  });
}

const id = req.params.id;

Post.findByIdAndUpdate(id, req.body, { useFindAndModufy: false })
.then(data => {
  if (!data) {
    res.status(404).send({
      message: `Impossible de modifier le post avec id=${id}`
    });
  }else res.send({ message: "Post modifié avec succes ! "});
})
.catch(err => {
  res.status(500).send({ message: "Erreur avec la modification ud post avec l'id" + id });
});
};
exports.deletePost = (req, res, next) => {

  const id = req.params.id;
  
  Post.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Impossible de suprimer le post avec l'id=${id}`
      });
    }else {
      res.send({ message: "Post supprimé avec succes !"});
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Impossible de trouver le post à supprimer avec l'id" + id
    });
  })
  };
/*const db = require ("../models/index");
const Post = db.post;
const User = db.user;
const Comment = db.comment;
const fs = require('fs');

exports.createPost = (req, res, next) => {
// Analyse le post en utilisant une chaîne de caractères
if(req.body.content == null) {
  return res.status(400).send({
    message: "Votre message createPost ne peut pas être vide"
  });
}
console.log(req.body);
  const post = {
    content: req.body.content,
    user_id: req.body.user_id,
    imageUrl: req.body.content && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
};

//Enregistre le post dans la base de données
Post.create(post)
    .then(()=> res.status(201).json({ message: 'Post enregistré !'}))
    .catch(() => res.status(400).json({ message: "erreur post controller"} ));
};

exports.findAll = (req,res) => {
   
Post.findAll({
  include: [{model: User, Comment}],
    order: [['createdAt', 'DESC']],
})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Une erreur s'est produite lors de la récupération"
    });
  });
};

exports.modifyPost = (req, res, next) => {
 
if(!req.body) {
  return res.status(400).send({
    message: "Votre message modifié ne peut pas être vide"
  });
}

const id = req.params.id;

Post.modifyPost(id, req.body)
.then(data => {
  if (!data) {
    res.status(404).send({
      message: `Impossible de modifier le post avec id=${id}`
    });
  }else res.send({ message: "Post modifié avec succes ! "});
})
.catch(err => {
  res.status(500).send({ message: "Erreur avec la modification ud post avec l'id" + id });
});
};
exports.deletePost = (req, res, next) => {
Post.findOne({
      where: {
          id: req.params.id
      }
  }).then(post => {
      if (post.imageUrl !== null) {
          const filename = post.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => { 
          Post.destroy({ where: {id: req.params.id} }) 
              .then(() => res.status(200).json({ message: 'Post supprimé !'}))
              .catch(error => res.status(400).json({ error }));
          });
      }
      Post.destroy({ where: {id: req.params.id} })
          .then(() => res.status(200).json({ message: 'Post supprimé !'}))
          .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(400).json({ message: "Post introuvable", error: error }))

};*/
/* in controllers/sauces.js
const Sauce = require('../models/Sauce');
const fs = require('fs');
const xss = require('xss');

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    name: xss(sauceObject.name),
    manufacturer: xss(sauceObject.manufacturer),
    description: xss(sauceObject.description),
    mainPepper: xss(sauceObject.mainPepper),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes: 0
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllSauce = (req, res, next) => {
  Sauce.find()
  .then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  )
  .catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id
  })
  .then(
    (sauce) => {
      res.status(200).json(sauce);
    }
  )
  .catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      if (req.file){
        const filename = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet modifié !'}))
          .catch(error => res.status(400).json({ error }));
        });
        
      }else{
        Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
      }
    })
    .catch(error => res.status(500).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.addLike = (req, res, next) => {
  const userLike = req.body.like;
  const userId = req.body.userId;

  Sauce.findOne({ _id: req.params.id })
  .then((sauce) => {
    const usersLiked = sauce.usersLiked
    const usersDisliked = sauce.usersDisliked

    /*si j'aime=0 l'utilisateur annule ce qu'il aime ou ce qu'il n'aime pas  
    if (userLike == 0) {
      // on cherche les utilisateurs: les utilisateurs qui aime et les utilisateurs qui aime pas //
      const foundUserLiked = usersLiked.find(usersId => usersId == userId);
      const foundUserDisliked = usersDisliked.find(usersId => usersId == userId);

      //si l'utilisateur est dans la categorie qui aime //
      if (foundUserLiked) {
        //suppression dans Usersliked et -1 dans likes
        Sauce.updateOne({ _id: req.params.id },
        { $pull: { usersLiked: userId }, $inc : {likes: -1}})
        .then(() => res.status(200).json({ message: "L'utilisateur n'aime plus"}))
        .catch(error => res.status(400).json({ error }));

      //si l'utilisateur est dans la categorie  disliked
      } else if (foundUserDisliked){
        //suppression dans Usersdisliked et -1 dans dislikes
        Sauce.updateOne({ _id: req.params.id },
        { $pull: { usersDisliked: userId }, $inc : {dislikes: -1}})
        .then(() => res.status(200).json({ message: "L'utilisateur ne déteste plus"}))
        .catch(error => res.status(400).json({ error }));
      }

    //si 1
    }else if (userLike == 1) {
      //ajout dans Usersliked et +1 dans likes
      Sauce.updateOne({ _id: req.params.id },
      { $push: { usersLiked: userId }, $inc : {likes: 1}})
      .then(() => res.status(200).json({ message: "L'utilisateur aime"}))
      .catch(error => res.status(400).json({ error }));

    //si -1
    } else if (userLike == -1){
      //ajout dans Usersdisliked et +1 dans dislikes
      Sauce.updateOne({ _id: req.params.id },
      { $push: { usersDisliked: userId }, $inc : {dislikes: 1}})
      .then(() => res.status(200).json({ message: "L'utilisateur n'aime pas"}))
      .catch(error => res.status(400).json({ error }));
    }
  })
  .catch((error) => {res.status(404).json({error: error})});
};*/