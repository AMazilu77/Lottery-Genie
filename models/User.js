const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {

    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profileImg: { type: String, default: '' },
    headerImg: { type: String, default: '' },
    bio: { type: String, default: '' },
    city: { type: String, default: '' },
    // facebookID: String,
    // googleID: String,
    FavoriteGame: { type: String },
    TotalWinnings: { type: Number },
    TotalLosses: { type: Number },
    luckyNumbers: [],




    // schemas for each game user saves numbers for
    numbersPlayed: {
      // counter to tell how many sets of numbers you have saved  keeping track of how many lottery tickets user has played
      counterPick2: Number,
      //  array of saved tickets
      pick2: [
        {
          // list of tickets played and date of when saved
          Ticket: [Number],
          // timestamps: {
          //   createdAt: "created_at"
          // }
        }
      ]
    },




    // favoriteGame: {
    //
    // },

    // experience points used for daily app usage
    experiencePoints: {
      type: Number,
      default: 100
    },
    // Wishes used to command the Djinni
    wishes: {
      type: Number,
      default: 3
    }
  },

  // keep track of when the account was created and when updated
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  },



);

const User = mongoose.model('user', userSchema, 'users')

module.exports = User
