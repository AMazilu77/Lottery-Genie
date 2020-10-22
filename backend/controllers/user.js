const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")



//* user registration logic control */
exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
            // use bcrypt npm package to encrypt pw data securely
            // password: req.body.password  ( <--do not ever store passwords like this!)
        });
        // save user to DB
        user.save()
        .then(result => {
            res.status(201).json({
                message: 'User created',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                    message: ' Invalid Authentication Credentials.'
                
            });
        });
    });
}

//* user login control */
exports.loginUser = (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: 'Authentication failed, The Djinn Does not Recognize you'
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
        if (!result) {
            return res.status(401).json({
                message: 'Auth Failed'
            });
        }

        // sign method creates a new token based on input data of choice
        const token = jwt.sign({
            email: fetchedUser.email,
            userId: fetchedUser._id
 
            // PW used to create hash, stored on server and used to validate hash, this is what makes jWTs uncrackable
        },
         process.env.JWT_KEY,
          { expiresIn: "1h"} 
        );
        res.status(200).json({
            token: token,
            expiresIn: 3600,
            // user Id passed to front end on login
            userId: fetchedUser._id
        })
    })
    .catch(err => {
        return res.status(401).json({
            message: "Invalid authentication credentials."
        });
    });
}