const express = require('express')
// const LOCALDB = require('process.env.LOCALDB')
const router = express.Router();
const WinModel = require('../models/winningNumbersModel')
const hbs = require('hbs');

router.get("/megaWin", (req, res, next) => {
  WinModel.find()
    .then(WinningMegaMillions => {
      console.log("Mega win time!!!");
      res.render("megaWin", {
        WinningMegaMillions
      });
    })

    .catch(error => {
      console.log(error);
    });
});


module.exports = router;
