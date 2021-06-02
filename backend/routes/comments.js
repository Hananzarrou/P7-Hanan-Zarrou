const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comment');
const auth = require ('../middleware/auth');

//Routes
router.post('/:id/comment', auth, commentsCtrl.createComment);
router.get('/:id/comment', auth, commentsCtrl.getAllComments);

 
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