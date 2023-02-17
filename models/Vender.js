const mongoose  =  require("mongoose");
const { Schema } = mongoose;

const venderSchema = new Schema({
    name : { type : String, required: true },
    email : { type : String, required: true, unique : true },
    phone : { type : Number, required: true },
    role : { type : String, required: true },
    password : { type : String, required: true },
    address : { type : String, required: true },
    city : { type : String, required: true },
    pin : { type : Number, required: true },
    state : { type : String, required: true },
    token: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Vender", venderSchema);