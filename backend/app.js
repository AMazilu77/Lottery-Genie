const express = require('express');
const app = express();

app.use('/api/posts', (req, res, next) => {
  const LuckyNumbersDefault = [7, 33]
  res.json({
    message: 'posts retrieved',
    LuckyNumbersDefault: LuckyNumbersDefault
  });
})


// exports the express app and all the midddleware logic
module.exports = app;
