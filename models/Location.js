const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new Schema(
    {
        sellerId: { type: Schema.Types.ObjectId, ref: "Seller" },
        location :{
            type: { type: String, default: "Point" },
            coordinates: { type: [ Number ], required : true  } } //longitude and latitud
    }, { timestamps: true }
)
module.exports = mongoose.model('Location', locationSchema);