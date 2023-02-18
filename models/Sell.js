const mongoose  =  require("mongoose");
const { Schema } = mongoose;

const sellSchema = new Schema({
    sellerId: { type: Schema.Types.ObjectId, ref: "Seller" },
    name : { type : String, required: true },
    contact : { type : Number },
    wasteFrom : { type : String, enum : ['Industry', 'HouseHold', 'Market', 'Office'] },
    wasteType : { type : String, enum : ['Plastic', 'Paper', 'Metal', 'Glass', 'Organic'] },
    weightInKg : { type : Number, default: 0 },
    pricePerKg : {type : Number, default: 0},
}, { timestamps: true });
// enum:["Seller","Vender"]
module.exports = mongoose.model("Sell", sellSchema);