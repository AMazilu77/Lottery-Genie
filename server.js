require('dotenv').config()
//Install express server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const chalk = require('chalk')
const hbs = require('hbs');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');
const MegaWinners = require('./models/winningNumbersModel');
const router = require('./routes/index');

// const app = require("./app");
// const debug = require("debug")("node-angular");
// const http = require("http");

// const normalizePort = val => {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(bodyParser.json());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/The-Lottery-Djinni'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/The-Lottery-Djinni/index.html'));
});


// Online Database connection
// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGODB_URI || 3000)
//   .then(() => {
//     console.log('Connected to Mongo!')
//   }).catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// Local DB connection code
mongoose.Promise = Promise;
mongoose
  .connect(process.env.LOCALDB, { useNewUrlParser: true })
  .then(() => {
    console.log(chalk.magenta('The Djinn has Connected to Mongo!'))
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });



// router.get('/api/users/', (req, res) => {


//   res.status(200).send({
//     success: 'here is the user list',
//     message: 'user list acquired',
//     users: req.body.users

//   });
// });

// const users = {

//   name: req.body.username,
//   wishes: req.body.wishes,
// };


// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully!');
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// const index = require('./routes/index');
// app.use('/', index);
app.use('/', router);

// router.route('/megas').get((req, res) => {
//   MegaWinners.find((err, MegaWinners) => {
//     if (err)
//       console.log(err);
//     else
//       res.json(MegaWinners);
//   });
// });


// FIRST INSTANCE OF SERVER WORKING

// require('dotenv').config()
// //Install express server
// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose')
// const app = express();
// const chalk = require('chalk')

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/The-Lottery-Djinni'));

// app.get('/*', function (req, res) {

//   res.sendFile(path.join(__dirname + '/dist/The-Lottery-Djinni/index.html'));
// });

// // Online Database connection
// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGODB_URI || 3000)
//   .then(() => {
//     console.log('Connected to Mongo!')
//   }).catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// // Local DB connection code
// // mongoose.Promise = Promise;
// // mongoose
// //   .connect(process.env.LOCALDB, { useNewUrlParser: true })
// //   .then(() => {
// //     console.log(chalk.magenta('The Djinn has Connected to Mongo!'))
// //   }).catch(err => {
// //     console.error('Error connecting to mongo', err)
// //   });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 3000, function () {
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
