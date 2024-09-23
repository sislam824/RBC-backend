

const logMiddleware = (req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next(); 
};

module.exports = logMiddleware;
