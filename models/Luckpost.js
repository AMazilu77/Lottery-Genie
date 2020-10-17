const mongoose = require('mongoose')

// blue print for how data should look like using schema method
const luckyPostSchema = mongoose.Schema({
  // ** Changed Number Selected To String **
  numberSelected: {type: String, required: true },
  reasoning: {type: String, required: false },
  imagePath: {type: String, required: false },
  creator: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

// model object is what is created from the blue print, using mon
module.exports = mongoose.model('LuckyNumberPostSchema', luckyPostSchema )
