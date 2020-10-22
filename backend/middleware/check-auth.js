const jwt = require('jsonwebtoken');

// check authentication in route files, middleware is just a function that gets executed on incoming req
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'secret_that_should_be_longer_than_this');
        req.userData =  { email: decodedToken.email, userId: decodedToken.userId};
        next();
    } catch (error) {
        res.status(401).json({ message: "You are not authenticated."})
    }
    
};