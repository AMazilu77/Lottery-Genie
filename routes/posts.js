const express = require("express");

const LuckyNumberPostSchema = require("../models/Luckpost");

const router = express.Router();


router.post("", (req, res, next) => {
  const post = new LuckyNumberPostSchema({
    numberSelected: req.body.numberSelected,
    reasoning: req.body.reasoning
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully Alex - this is from the post.js file !",
      postId: createdPost._id
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
