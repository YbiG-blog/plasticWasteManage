const mongoose  =  require("mongoose");
const { Schema } = mongoose;

const sellSchema = new Schema({
    sellerId: { type: Schema.Types.ObjectId, ref: "Seller" },
    name : { type : String, required: true },
    contact : { type : Number },
    wasteFrom : { type : String, enum : ['Industry', 'HouseHold', 'Market', 'Office'] },
    wasteType : { type : String, enum : ['Plastic', 'Paper', 'Metal', 'Glass', 'Organic'] },
    weight : { type : Number, default: 0 },
    address : { type : String, required: true }
}, { timestamps: true });
// enum:["Seller","Vender"]
module.exports = mongoose.model("Sell", sellSchema);