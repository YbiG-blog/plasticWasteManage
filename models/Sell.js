const mongoose  =  require("mongoose");
const { Schema } = mongoose;

const sellerSchema = new Schema({
    name : { type : String, required: true },
    contact : { type : Number },
    wasteFrom : { type : String, enum : ['Industry', 'HouseHold', 'Market', 'Office'] },
    wasteType : { type : String, enum : ['Plastic', 'Paper', 'Metal', 'Glass', 'Organic'] },
    address : { type : String, required: true },
    city : { type : String, required: true },
    pin : { type : Number, required: true },
    state : { type : String, required: true },
    token: { type: String }
}, { timestamps: true });
// enum:["Seller","Vender"]
module.exports = mongoose.model("Seller", sellerSchema);