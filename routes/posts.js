const express = require("express");
const multer = require('multer');
const LuckyNumberPostSchema = require("../models/Luckpost");

const router = express.Router();

// mime type helper, maps mimetype and which extensons they would be.
const MIME_TYPE_MAP = {
  'img/png': 'png',
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
    const name = file.originalname.toLowerCase().split(' ').join('-');
    // extract extension
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext );
  }
});

// single means multer is expecting a single file, pass a javascript objefct with a property for storage,
// which then takes the storage confirguration
router.post("", multer({storage: storage}).single('image'),(req, res, next) => {
  // constructs url to the server
  const url = req.protocol + '://' + req.get('host');
  const post = new LuckyNumberPostSchema({
    numberSelected: req.body.numberSelected,
    reasoning: req.body.reasoning,
    imagePath: url + '/images/' + req.file.filename
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully Alex - this is from the post.js file !",
      post: {
       id: createdPost._id,
      //  numberSelected: createdPost.numberSelected,
      //  reasoning: createdPost.reasoning,
      //  imagePath: createdPost.imagePath

       ...createdPost,
       id: createdPost._id
       }
    });
  });
});

router.put("/:id", (req, res, next) => {
  const post = new LuckyNumberPostSchema({
    _id: req.body.id,
    numberSelected: req.body.numberSelected,
    reasoning: req.body.reasoning
  });
  LuckyNumberPostSchema.updateOne({ _id: req.params.id }, post).then(result => {
    res.status(200).json({ message: "Update successful from the post.js file!" });
  });
});

router.get("", (req, res, next) => {
  LuckyNumberPostSchema.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully! can you believe it? this is from the posts.js file!",
      posts: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  LuckyNumberPostSchema.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  LuckyNumberPostSchema.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = router;
