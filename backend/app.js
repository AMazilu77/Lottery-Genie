require('dotenv').config({ path: '.env' });
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const chalk = require('chalk');
const postsRoutes = require("../routes/posts");
const userRoutes = require('../routes/user');
const winningRoute = require('../routes/index');

mongoose.connect('mongodb+srv://Alexander:zxc123@jinnrecords-dt5l3.mongodb.net/test' || process.env.AWSONLINE, {
  useUnifiedTopology: true,
  useNewUrlParser: true
 }).then(() => {
  console.log('Djinn has connected to the AWS database');
}).catch((err) => {
  console.log(err, 'No Connection - Mongo database failed! The Djinn Summoning has failed! NOW ITS FREE!! FIX THIS!!!')
});

// app.listen(process.env.PORT || 3000, function () {
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// static middleweare
app.use('/images', express.static(path.join('backend/images')));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin",
//    "*");

//   res.header("Access-Control-Allow-Credentials", true);
   
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});



app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/winning", winningRoute);

// exports the express app and all the midddleware logic!
module.exports = app;

