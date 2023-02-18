const mongoose  =  require("mongoose");
const { Schema } = mongoose;

const purchaseSchema = new Schema({
    vendorId: { type: Schema.Types.ObjectId, ref: "Vendor" },
    sellerId : { type: Schema.Types.ObjectId, ref: "Seller" },
    name : { type : String, required: true },
    contact : { type : Number },
    wasteFrom : { type : String, enum : ['Industry', 'HouseHold', 'Market', 'Office'] },
    wasteType : { type : String, enum : ['Plastic', 'Paper', 'Metal', 'Glass', 'Organic'] },
    weightInKg : { type : Number, default: 0 },
    purchasePricePerKg : {type : Number, default: 0},
    address : { type : String, required: true }
}, { timestamps: true });
// enum:["Seller","Vender"]
module.exports = mongoose.model("Purchase", purchaseSchema);