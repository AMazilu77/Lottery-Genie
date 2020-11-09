let mongoose = require('mongoose').set('debug', true);;
let Schema = mongoose.Schema;

const winningNumberPick2Schema = mongoose.Schema({
  drawdate: { type: String, required: true },
  winningNumber: { type: String, required: true },
  midDay: { type: Boolean, reqired: true },
  evening: {type: Boolean, required: true }
})

// name of model export first which will be pluralized and schema to base model on
const winningPick2numbers = mongoose.model('WinningPick2', winningNumberPick2Schema);
module.exports = winningPick2numbers
// 

// let WinningPick2 = new Schema({

//   drawDate: Date,
//   winningNumber: String,
  // winningNumber1: String,
  // winningNumber2: String,

// })

// const WinningP2FL = mongoose.model('P2Winners', WinningPick2);
// module.exports = WinningP2FL;

// let Winning_MegaMillions_Schema = new Schema({
//   drawDate: Date,
//   winningNumber: String,
//   // winningNumbers1: String,
//   // winningNumbers2: String,
//   // winningNumbers3: String,
//   // winningNumbers4: String,
//   // winningNumbers5: String,
//   // rules: String,
//   megaBall: String,
//   multiplier: String
// });

// const megaMillionsExport = mongoose.model('megas', Winning_MegaMillions_Schema)
// module.exports = megaMillionsExport
// 
// const WinningMegaMillions = mongoose.model('Mega', Winning_MegaMillions_Schema);
// module.exports = WinningMegaMillions;
