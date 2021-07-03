const db = require ("../models/index");
const Post = db.post;
const User = db.user;
const Comment = db.comment;
//const Comment = require('../models/Comment');
const fs = require('fs');

exports.createComment = (req, res, next) => {
// Analyse le commentaire en utilisant une chaîne de caractères
console.log (req.body.content)
  const commentObject = {
    content: req.body.content,
    postId: req.body.postId,
    userId: req.body.userId,
  };
  
  console.log(commentObject);
  
Comment.create(commentObject)
    .then(() => res.status(201).json({ message: 'Commentaire enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllComment = (req, res, next) => {
// Renvoie le tableau de toutes les commentaires dans la base de données
Comment.find().then(
    (posts) => {
      res.status(200).json(comment);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.modifyComment = (req, res, next) => {
//Met à jour le commentaire avec l'identifiant fourni.  

const commentObject = req.file ?
{
//Si une image est téléchargée, capturez-la et mettez à jour l'image URL des commentaires.
  ...JSON.parse(req.body.comment),
  imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
/*Si aucun fichier n'est fourni, les détails du figurent directement dans le
corps de la demande*/
}: { ...req.body };
//Si un fichier est fourni, le commentaire avec chaîne est en req.body.comment.

        
Comment.updateOne({ _id: req.params.id }, { ...commentObject, _id: req.params.id })
  
  .then(() => res.status(200).json({ message: 'Commentaire modifié !'}))
  .catch(error => res.status(400).json({ error }));
};
  
exports.deleteComment = (req, res, next) => {
// Supprime le commentaire avec l'ID fourni.

Comment.findOne({ _id: req.params.id })
    .then(comment => {
      const filename = comment.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
      Comment.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
      .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };
