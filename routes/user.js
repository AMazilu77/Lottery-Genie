const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/signup", (req, res, nest) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
            // do not ever store passwords like this use bcrypt npm package to encrypt pw data securely
            // password: req.body.password
        });
        // save user to DB
        user.save()
        .then(result => {
            res.status(201).jason({
                message: 'User created',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
    })
});

module.exports = router;