require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const LuckPostSchema = require('../models/Luckpost');
const chalk = require('chalk')

mongoose.connect(process.env.AWSONLINE).then(() => {
  console.log(chalk.magenta('Djinn has connected to the AWS database'));
}).catch(() => {
  console.log('Connection to AWS - Mongo database failed! The Djinn Summoning has failed! NOW ITS FREE!! FIX THIS!!!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new LuckPostSchema({
    numberSelected: req.body.numberSelected,
    reasoning: req.body.reasoning
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added dude',
      postId: createdPost._id
    });
  });
});

app.get('/api/posts', (req, res, next) => {
  LuckPostSchema.find()
    .then(documents => {
      res.status(200).json({
        message: "Lucky Number Posts Fetched !",
        posts: documents
      });
    });
});

app.put("/api/posts/:id", (req, res, next) => {
  const post = new LuckPostSchema({
    _id: req.body.id,
    numberSelected: req.body.numberSelected,
    reasoning: req.body.reasoning
  });
  LuckPostSchema.updateOne({
    _id: req.params.id
  }, post).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'update sucessful Alex'
    })
  })
});

app.delete("/api/posts/:id", (req, res, next) => {
  LuckPostSchema.deleteOne({
    _id: req.params.id
  }).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Post deleted!"
    });
  });
});

// exports the express app and all the midddleware logic
module.exports = app;
