const { responseTemplate, responseMessage } = require("../../utils/errorResponse");
const Sell = require("../../models/Sell");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const getSellData  = async (req, res) => {
  try {
    const dataArray = await Sell.aggregate([
      {$lookup :{
        from : "sellers",
        localField : "sellerId",
        foreignField : "_id",
        as : "seller"   }},
        {$sort : { sellerId : 1}}
    ]);
  return res.status(201).json(await responseTemplate(true, "Sell data sended.", dataArray, null));
  } catch (e) {
      console.log(`error ${e}`);
      return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
  }
};  
const getSellDataByParams  = async ({ params }, res) => {
    try {
      const { wasteType } = params;
      console.log(wasteType);
      const dataArray = await Sell.aggregate([
        { $match: { wasteType : wasteType} },
        {$lookup :{
          from : "sellers",
          localField : "sellerId",
          foreignField : "_id",
          as : "seller"   }},
          {$sort : { sellerId : 1}}
      ]);
            return res.status(201).json(await responseTemplate(true, "Sell data sended.", dataArray, null));
    } catch (e) {
        console.log(`error ${e}`);
        return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
  };  

module.exports = { getSellDataByParams, getSellData };  