const express = require('express')
// const LOCALDB = require('process.env.LOCALDB')
const router = express.Router();
const winningPick2 = require('../models/winningNumbersModel')
const assert = require('assert');
const url = "mongodb://localhost:3000/api/winning";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
const dbName = 'winning-numbers';
const mongoose = require('mongoose');



   
    // route to POST winning pick 2 numbers!
    router.post('/FLPick2Winners', (req, res, next) => {
      const winningNumbers = new winningPick2({
        _id: new mongoose.Types.ObjectId(),
        drawDate: req.body.drawDate,
        winningNumber: req.body.winningNumber,
        fireball: req.body.fireball,
        midDay: req.body.midDay,
        evening: req.body.evening
      });
      winningNumbers
      .save()
      // chain promise with then
      .then(result => {
        console.log(result);
      })
        .catch(err => console.log(err));

        res.status(201).json({
          message: "handling post",
          createdWinningNumber: winningNumbers
        });
      
    });
  

    // GET route to fetch all pick 2 winning numbers
    router.get('/FLPick2Winners', (req, res, next) => {
      winningPick2.find()
      .exec()
      .then(documents => {
       console.log(documents);
       res.status(200).json(documents);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    })

    

  // router.get('/FLPick2Winners', function(req, res, next){
  //   var resultArray = [];
  //   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client){
  //     // check if we do or do not have an error
  //     assert.strictEqual(null, err);
  //     const db = client.db(dbName);
  //     // find gets all entries in collection and we store it in curser with foreach
  //     var cursor = db.collection('winningpick2').find();
  //     cursor.forEach(function(doc, err) {
  //         assert.strictEqual(null, err);
  //         resultArray.push(doc);
  //     }, function(){
  //       console.log(cursor)
  //       client.close();
  //       res.render('index', {items: resultArray});
  //     });
  //   });
  // });
  



  // router.get('/FLPick2Winners', (req, res, next) => {
  //   const Winning2Model = new winningPick2numbers({
  // drawdate: '11/6/2020',
  // winningNumber: '31',
  // midDay: false,
  // evening: true
  //   });
  //   madeup.save()
  //   console.log(Winning2Model) 
  // })


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
