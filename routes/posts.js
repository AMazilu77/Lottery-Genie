const express = require("express");
const multer = require('multer');
const LuckyNumberPostSchema = require("../models/Luckpost");

const router = express.Router();
const authChecker = require('../backend/middleware/check-auth');

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

// create post DONE

// single means multer is expecting a single file, pass a javascript object with a property for storage,
// which then takes the storage confirguration
router.post("", authChecker,
  multer({storage: storage}).single('image'),
    (req, res, next) => {
      // constructs url to the server
        const url = req.protocol + '://' + req.get('host');
        const post = new LuckyNumberPostSchema({
          numberSelected: req.body.numberSelected,
          reasoning: req.body.reasoning,
          imagePath: url + '/images/' + req.file.filename,
          creator: req.userData.userId
      });
    post.save().then(createdPost => {
      res.status(201).json({
        message: "Post added successfully !",
        post: {
        // id: createdPost._id,
        //  numberSelected: createdPost.numberSelected,
        //  reasoning: createdPost.reasoning,
        //  imagePath: createdPost.imagePath
        ...createdPost,
        id: createdPost._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'creating post failed!'
      })
    });
  }
);


// Edit route Post done for adding images and editing images
router.put("/:id", authChecker,
    multer({ storage: storage }).single("image"),
  (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename
    }
    const post = new LuckyNumberPostSchema({
      _id: req.body.id,
      numberSelected: req.body.numberSelected,
      reasoning: req.body.reasoning,
      imagePath: imagePath,
      creator: req.userData.userId
    });
    LuckyNumberPostSchema.updateOne({ _id: req.params.id, creator: req.userData.userId }, post).then(result => {
      if (result.nModified > 0 ) {
        res.status(200).json({ message: "Update successful from the post.js file!" });
      } else {
        res.status(401).json({ message: " Not Authorized. "})
      }
     })
     .catch(error => {
       res.status(500).json({
         message: "Could not update post"
       })
     });
  }
);


router.get("", (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = LuckyNumberPostSchema.find();
  let fetchedPosts;   
  if (pageSize && currentPage) {
    postQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  postQuery.then(documents => {
    fetchedPosts = documents;
    return LuckyNumberPostSchema.count()
  })
  .then(count => {
    res.status(200).json({
      message: "All Posts fetched alright!",
      posts: fetchedPosts,
      maxPosts: count
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'fetching posts failed!'
    });
  });
});


// get specific post id done
router.get("/:id", (req, res, next) => {
  LuckyNumberPostSchema.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'fetching post failed!'
    });
  });
});


// delete route done
router.delete("/:id", authChecker, (req, res, next) => {
  LuckyNumberPostSchema.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(result => {
    console.log(result);
    if (result.n > 0 ) {
      res.status(200).json({ message: "Deletion successful from the post.js file!" });
    } else {
      res.status(401).json({ message: "Deletion Failed! "})
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Deletion failed!'
    });
  });;
});

module.exports = router;
