require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const LuckPostSchema = require('../models/Luckpost');

app.use(bodyParser.json());

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
  console.log(post);
  res.status(201).json({
    message: 'Post added'
  })
})

app.get('/api/posts', (req, res, next) => {
  const LuckyNumbersDefaultPost = [
    { id: '637841', numberSelected: 5, reasoning: '5 is the pentagram yo, coming from the server'},
    { id: '374101', numberSelected: 6, reasoning: '6 is the hexagram yo'},
    { id: '435841', numberSelected: 7, reasoning: '7 is the septagram yo'}
  ]

  res.status(200).json({
    message: "Lucky Number Posts Fetched !",
    LuckyNumbersDefaultPost: LuckyNumbersDefaultPost
  });

})


// exports the express app and all the midddleware logic
module.exports = app;
