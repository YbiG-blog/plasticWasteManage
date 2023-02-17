const { getModelFromRole } = require("../utils/role");
const { JWTEncrypt } = require("../helper/jwt");
const { responseTemplate, responseMessage } = require("../utils/errorResponse");
const bcrypt = require("bcrypt");

const loginUser = async ({ body }, res) => {
  try {
    const { role, email, password } = body;
    // ! provide role error
    if (role == "ADMIN" || role == "SELLER" || role == "VENDER") {
      const user = await getModelFromRole(role).findOne( { email } );
      //not exists
      if (!user) {
        return res.status(401).json(await responseTemplate(false, "This role does not have any account", null, null));
      }
      // ! use bcrypt to encrypt the password
      const matchPassword = await bcrypt.compare(password, user.password);
      if (!matchPassword) return res.status(401).json(await responseTemplate(false, responseMessage.wrongPassword , null, null));
      const token = JWTEncrypt(user);
      user.token = token;
      //add cookie
      return res.status(200).json(await responseTemplate(true, responseMessage.loginSuccess, user, null));
    } else { return res.status(401).json({ message: responseMessage.unauthorisedAccess });  }
  } catch (e) {
    console.log(e);
    return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
  }
};


module.exports = { loginUser };
