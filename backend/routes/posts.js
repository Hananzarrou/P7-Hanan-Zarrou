const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postsCtrl = require('../controllers/post');

router.post('/', auth, multer, postsCtrl.createPost);
router.get('/', auth, postsCtrl.findAll);
router.put('/:id', auth, multer, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);

module.exports = router;
/*const express = require('express');
const router = express.Router();

//J'importe le middleware qui protège mes routes
const auth = require('../middleware/auth');
//J'importe le middleware qui permet de télécharger des fichiers image depuis le frontend
const multer = require('../middleware/multer-config');
//J'importe mes logiques métier (controllers) pour les intégrer à la route correspondante
const postsCtrl = require('../controllers/post');

//Pour protéger mes routes, j'ajoute le middleware 'auth' avant le controleur
//J'applique la fonction 'logique métier' correspondante à la route 
router.post('/', auth, postsCtrl.createPost);
router.get('/:id', postsCtrl.findOne);
router.get('/', postsCtrl.findAll);
router.put('/:id', auth, multer, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);


module.exports = router;*/

