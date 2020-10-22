const jwt = require('jsonwebtoken');

// check authentication in route files, middleware is just a function that gets executed on incoming req
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData =  { email: decodedToken.email, userId: decodedToken.userId};
        next();
    } catch (error) {
        res.status(401).json({ message: "You are not authenticated."})
    }
    
};