const Admin = require("../models/Admin");
const Seller = require("../models/Seller");
const Vender = require("../models/Vender");

const getModelFromRole = role => {
    if(role === 'ADMIN') return Admin;
    else if(role === 'SELLER') return Seller;
    else if(role === 'VENDER') return Vender;
    return null;
}

module.exports = { getModelFromRole };