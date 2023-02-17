const jwt = require('jsonwebtoken')

const { responseTemplate, responseMessage } = require("../utils/response");

const jwt_token_secret = process.env.JWT_TOKEN_SECRET;

const JWTMiddleware = async (req, res, next) => { 
    // let { authorization } = req.headers.jwt_starting_core;
    const token = req.headers.cookie_token;
    if (token) {
        try {
            let decryptedToken = jwt.verify(token, jwt_token_secret);
            if (decryptedToken) {
                // 
                req.user = decryptedToken;
                // console.log(decryptedToken)
                return next();
            }
            else {
                return res.status(401).json(await responseTemplate(false, responseMessage.invalidToken, null, null))
            }
        } catch (err) {
            if (err.message == "invalid signature") return res.status(403).json(await responseTemplate(false, responseMessage.differentToken, null, null))
            return res.status(401).json(await responseTemplate(false, responseMessage.invalidToken, null, null))
        }
    } else {
        return res.status(401).json(await responseTemplate(false, responseMessage.tokenNotFound, null, null))
    }
}
const JWTEncrypt = document => {
    return jwt.sign({
        _id: document._id
    }, jwt_token_secret)
}
module.exports = { JWTMiddleware, JWTEncrypt }