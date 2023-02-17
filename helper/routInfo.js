const routeInfoMiddleWare = async (req, res, next) => { 
    console.log(`-----> ${req.originalUrl} <-----`);
    next();
}
module.exports = routeInfoMiddleWare;