require('dotenv').config()
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const chalk = require('chalk');
const postsRoutes = require("../routes/posts");
const userRoutes = require('../routes/user');
const winningRoute = require('../routes/index');

mongoose.connect(process.env.AWSONLINE, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log('Djinn has connected to the AWS database');
}).catch((err) => {
  console.log(err, 'No Connection - Mongo database failed! The Djinn Summoning has failed! NOW ITS FREE!! FIX THIS!!!')
});

// app.listen(process.env.PORT || 3000, function () {
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// static middleweare
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/winning", winningRoute);

// exports the express app and all the midddleware logic
module.exports = app;
