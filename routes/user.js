const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const router = express.Router();

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
            // do not ever store passwords like this use bcrypt npm package to encrypt pw data securely
            // password: req.body.password
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
                error: err
            });
        });
    });
});

router.post('/login', (req, res, next) => {
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
         'secret_that_should_be_longer_than_this', { expiresIn: "1h"} 
        );
        res.status(200).json({
            token: token
        })
    })
    .catch(err => {
        return res.status(401).json({
            message: "Incorrect password"
        });
    });
});

module.exports = router;