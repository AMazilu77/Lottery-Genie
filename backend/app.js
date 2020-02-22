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
  // allows which domains are allowed to access our resources
  res.setHeader(
    'Access-Control-Allow-Origin', '*'
  );
  // allows extra headers, origin header, x req header, content type, and accept
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  // control which http verbs may be used to send requests
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new LuckPostSchema({
    numberSelected: req.body.numberSelected,
    reasoning: req.body.reasoning
  });
  post.save();
  console.log(post);
  res.status(201).json({
    message: 'Post added dude'
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


// exports the express app and all the midddleware logic
module.exports = app;
