require('dotenv').config()


const mongoose = require('mongoose')
const chalk = require('chalk')
const cors = require('cors');
const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3001;
const server = http.createServer(app)

app.set('port,', port);

server.listen(port)

mongoose.connect(process.env.AWSONLINE).then(() => {
  console.log(chalk.magenta('Djinn has connected to the AWS database'));
}).catch(() => {
  console.log('Connection to AWS - Mongo database failed! The Djinn Summoning has failed! NOW ITS FREE!! FIX THIS!!!')
});






// old express app code that was mixed into the server.js file

// const User = require('./models/User');
// const MegaWinners = require('./models/winningNumbersModel');
// const router = require('./routes/index');

// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(router);
// app.use(bodyParser.json());
// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/The-Lottery-Djinni'));
// app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname + '/views/partials')
// app.get('/*', function (req, res) {

//   res.sendFile(path.join(__dirname + '/dist/The-Lottery-Djinni/index.html'));
// });

// app.use('/', router);



// DB

// Local DB connection code
// mongoose.Promise = Promise;
// mongoose
//   .connect(process.env.LOCALDB, {
//     useNewUrlParser: true
//   })
//   .then(() => {
//     console.log(chalk.magenta('The Djinn has Connected to Mongo!'))
//   }).catch(err => {
//     console.error('Error connecting to mongo', err)
//   });


// Online Database connection
// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGODB_URI || 3000)
//   .then(() => {
//     console.log('Connected to Mongo!')
//   }).catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

//// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
