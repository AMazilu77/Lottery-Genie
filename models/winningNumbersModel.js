let mongoose = require('mongoose').set('debug', true);;

// schema method takes a JS object which defines how winning number model should function
const winningNumberPick2Schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  drawDate: { type: String, required: true },
  winningNumber: { type: String, required: true },
  midDay: { type: Boolean},
  evening: {type: Boolean}
})

// export schema wrapped into a model, the model is the object itself which gives a constructor to build such objects based on schema
// name of model export first which will be pluralized and schema to base model on, first arguement is the name you want to use internally
// the convention is to use capital letter first, then 2nd is schema you want to use for that model
module.exports= mongoose.model('WinningPick2', winningNumberPick2Schema);

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
