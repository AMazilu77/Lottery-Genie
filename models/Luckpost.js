const mongoose = require('mongoose')

// blue print for how data should look like using schema method
const luckyPostSchema = mongoose.Schema({
  numberSelected: {type: Number, required: true },
  reasoning: {type: String, required: false }
});

// model object is what is created from the blue print, using mon
module.exports = mongoose.model('LuckyNumberPostSchema', luckyPostSchema )
