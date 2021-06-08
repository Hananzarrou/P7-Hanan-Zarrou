const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const commentsCtrl = require('../controllers/comment');

router.post('/', auth, multer, commentsCtrl.createComment);
router.put('/:id', auth, multer, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

module.exports = router;
/*Je récupère express pour crée un routeur
const express = require('express');
const router = express.Router();

//J'importe mes logiques métier (controllers) pour les intégrer à la route correspondante
const commentsCtrl = require('../controllers/comment');
//J'importe le middleware qui protège mes routes
const auth = require ('../middleware/auth');

//Routes
//Le : devant id indique à Express que ce chemin est dynamique 
router.post('/:id/comment', auth, commentsCtrl.createComment);
router.get('/:id/comment', auth, commentsCtrl.getAllComments);

 //Je réexporte le routeur
module.exports = router;

/*const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postsCtrl = require('../controllers/post');

router.post('/', auth, multer, postsCtrl.createPost);
router.get('/', auth, postsCtrl.findAll);
router.put('/:id', auth, multer, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);

module.exports = router;*/