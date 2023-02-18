const Admin = require("../models/Admin");
const Seller = require("../models/Seller");
const Vendor = require("../models/Vendor");

const getModelFromRole = role => {
    if(role === 'ADMIN') return Admin;
    else if(role === 'SELLER') return Seller;
    else if(role === 'VENDOR') return Vendor;
    return null;
}

module.exports = { getModelFromRole };