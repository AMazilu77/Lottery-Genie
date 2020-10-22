const express = require("express");
const multer = require('multer');
const authChecker = require('../backend/middleware/check-auth');

const router = express.Router();
const postController = require('../backend/controllers/posts')


// mime type helper, maps mimetype and which extensons they would be.
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

// multer express package for parasing incoming files
// pass js object to disk storage which takes a destination function which will be executed anytime a file is saved

const storage = multer.diskStorage({
  // the callback is the where to store it information, pass 2 things to callback,
  // if there is an error, then a path to where it should be stored
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('invalid mime type');
    if (isValid) {
      error = null;
    }
    // 2nd arguement is path, which is relative to server js file
    cb(error, 'backend/images');
  },
  filename: (req, file, cb) => {
    // formating
    const name = file.originalname
    .toLowerCase()
    .split(' ')
    .join('-');
    // extract extension
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

// post lucky numbers route 
router.post("", multer({storage: storage}).single('image'), authChecker, postController.userPost );


// Edit route Post done for adding images and editing images
router.put("/:id", multer({ storage: storage }).single("image"), authChecker, postController.userEditPost);

// retrieve all posts
router.get("", authChecker, postController.userGetsAllPosts);


// get specific post id done
router.get("/:id", authChecker, postController.userGetsOnePost);


// delete route done
router.delete("/:id", authChecker, postController.userDeletesPost);

module.exports = router;
