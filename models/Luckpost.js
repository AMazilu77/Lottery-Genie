const mongoose = require('mongoose')

const luckyPostSchema = mongoose.Schema({
  // id: {type: String, required: true},
  numberSelected: {type: Number, required: true },
  reasoning: {type: String, required: false }
});

module.exports = mongoose.model('LuckyNumberPostSchema', luckyPostSchema )
