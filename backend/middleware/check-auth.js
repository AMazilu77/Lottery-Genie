const jwt = require('jsonwebtoken');

// check authentication in route files, middleware is just a function that gets executed on incoming req
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'secret_that_should_be_longer_than_this');
        next();
    } catch (error) {
        res.status(401).json({ message: "check auth fail."})
    }
    
};