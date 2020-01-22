let mongoose = require('mongoose').set('debug', true);;
let Schema = mongoose.Schema;


// let WinningPick2 = new Schema({

//   drawDate: Date,
//   winningNumber1: String,
//   winningNumber2: String,

// })

// const WinningP2FL = mongoose.model('P2Winners', WinningPick2);
// module.exports = WinningP2FL;

let Winning_MegaMillions_Schema = new Schema({
  drawDate: Date,
  winningNumber: String,
  // winningNumbers1: String,
  // winningNumbers2: String,
  // winningNumbers3: String,
  // winningNumbers4: String,
  // winningNumbers5: String,
  // rules: String,
  megaBall: String,
  multiplier: String
});

const WinningMegaMillions = mongoose.model('Mega', Winning_MegaMillions_Schema);
module.exports = WinningMegaMillions;
