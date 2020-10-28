const LuckyNumberPostSchema = require("../../models/Luckpost");


exports.userPost = 
// single means multer is expecting a single file, pass a javascript object with a property for storage,
// which then takes the storage confirguration
  (req, res, next) => {
    // constructs url to the server
      const url = req.protocol + '://' + req.get('host');
      const post = new LuckyNumberPostSchema({
        numberSelected: req.body.numberSelected,
        reasoning: req.body.reasoning || null,
        // using ternary operator to make image posting optional
        imagePath: req.file ? ( url + '/images/' + req.file.filename): null,
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

exports.userEditPost = 
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
  if (result.n > 0 ) {
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

exports.userGetsAllPosts =  (req, res, next) => {
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
  }

  exports.userGetsOnePost =  (req, res, next) => {
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
  }

  exports.userDeletesPost = (req, res, next) => {
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
  }