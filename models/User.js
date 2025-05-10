const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
// const Schema = mongoose.Schema;
// const userSchema = new Schema(
  const userSchema = mongoose.Schema({
  

    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
    // userName: { type: String, unique: true, required: true },
    // use of unique here is for internal mongo optimization, not to act as a validator
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true },
    // profileImg: { type: String, default: '' },
    // headerImg: { type: String, default: '' },
    // bio: { type: String, default: '' },
    // city: { type: String, default: '' },
    // facebookID: String,
    // googleID: String,
    // FavoriteGame: { type: String },
    // TotalWinnings: { type: Number },
    // TotalLosses: { type: Number },
    // AverageWinnings: { type: Number },
     luckyNumbers: [],


    // experience points used for daily app usage
    // experiencePoints: { type: Number, default: 100},
    // Wishes used to command the Djinni
    // wishes: { type: Number, default: 3},
    // schemas for each game user saves numbers for
    // numbersPlayed: {
      // counter to tell how many sets of numbers you have saved  keeping track of how many lottery tickets user has played
      // counterPick2: Number,
      //  array of saved tickets
      // pick2: [
      //   {
          // list of tickets played and date of when saved
    //       Ticket: [Number],
    //        timestamps: {
    //          createdAt: "created_at"
    //       }
    //     }
    //   ]
    // },
    // and so on, for each game... presumably.
  },

  // keep track of when the account was created and when updated
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  },
);

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema)

module.exports = User
