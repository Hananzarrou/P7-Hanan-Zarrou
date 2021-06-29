const db = require ("../models/index");
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
    userId: req.body.userId,
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

};
/*const db = require ("../models/index");
const Op = db.Sequelize.Op;
const Post = db.post;

exports.createPost = (req, res, next) => {
  console.log("createPost",req.body)
// Analyse le post en utilisant une chaîne de caractères
if(req.body.content == 'content') {
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
 Post.create(post)
    .then(()=> res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ message: "erreur post controller"} ));
};

exports.findAll = (req,res) => {
  const content = req.query.content;
 
  Post.findAll()
  .then(data => {
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
  };*/
