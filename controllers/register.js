const { getModelFromRole } = require("../utils/role");
const bcrypt = require("bcrypt");
const { responseTemplate, responseMessage } = require("../utils/errorResponse");
const { JWTEncrypt } = require("../helper/jwt");
const registerUser = async ({ body }, res) => {
    try {
      const { name, email, phone, role, password, address, city, pin, state } = body;

      if ( role == "VENDER" || role == "SELLER") {
        const User = getModelFromRole(role);
        const user =  new User({ name, email, phone, role, password, address, city, pin, state });
        const userExist = await User.findOne({ email });
        if (userExist)  return res.status(403).json(await responseTemplate(false, responseMessage.alreadyRegistered, null, null));
  
        //token create
        const token = JWTEncrypt(user);
        user.token = token;
  
        // bcrypt password
        const salt = 10;
        user.password = await bcrypt.hash( user.password, salt);
        //save
        await user.save();
        return res.status(201).json(await responseTemplate(true, responseMessage.registerSuccess, user, null));
      }
      else return res.status(401).json({ message: responseMessage.unauthorisedAccess });
    } catch (e) {
      console.log(`error ${e}`);
      return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
  };

module.exports = { registerUser };  