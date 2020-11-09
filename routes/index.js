const express = require('express')
// const LOCALDB = require('process.env.LOCALDB')
const router = express.Router();
const WinningModel = require('../models/winningNumbersModel')
const hbs = require('hbs');

  router.get('/FLPick2Winners', (req, res, next) => {
    const Winning2Model = new winningPick2numbers({
  drawdate: '11/6/2020',
  winningNumber: '31',
  midDay: false,
  evening: true
    });
    madeup.save()
    console.log(Winning2Model) 
  })


// router.get("/FLPick2Winners", (req, res, next) => {
//   const url = req.protocol + '://' + req.get('host');
//   const pick2Winner = new WinPick2Model({
//     drawDate: req.body.drawDate,
//     winningNumber: req.body.winningNumber,
//     midDay: req.body.midDay,
//     evening: req.body.evening
//   })
//   console.log(pick2Winner.drawDate)
// })

// router.get("/megaWin", (req, res, next) => {
//   WinModel.find()
//     .then(WinningMegaMillions => {
//       console.log("Mega win time!!!");
//       res.render("megaWin", {
//         WinningMegaMillions
//       });
//     })

//     .catch(error => {
//       console.log(error);
//     });
// });

// router.get("/megaWin", (req, res, next) => {
//   // res.json({
//   //   "winningNumber": "7"
//   // })
//   WinModel.find()
//   .then(WinningMegaMillions => {
//     const pick2Winners = [
//       {
//         drawDate: "2018-07- 20",
//         megaBall: "01",
//         multiplier: "02",
//         winningNumber: "01 14 30 44 62"
//       }
//     ]
//   })
// });



module.exports = router;
