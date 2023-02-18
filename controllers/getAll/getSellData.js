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
        as : "seller" }},
        {$sort : { sellerId : 1}}
    ]);
  return res.status(200).json(await responseTemplate(true, "Sell data sended.", dataArray, null));
  } catch (e) {
      console.log(`error ${e}`);
      return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
  }
};  
// by waste type
const getSellDataByParams  = async ({ params }, res) => {
    try {
      const { wasteType } = params;
      // console.log(wasteType);
      const dataArray = await Sell.aggregate([
        { $match: { wasteType : wasteType} },
        {$lookup :{
          from : "sellers",
          localField : "sellerId",
          foreignField : "_id",
          as : "seller"   }},
          {$sort : { sellerId : 1}}
      ]);

    return res.status(200).json(await responseTemplate(true, "Sell data sended.", dataArray, null));
    } catch (e) {
    console.log(`error ${e}`);
    return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
  };  

  // const cityWiseData = async(req,res)=>{
  //   try {
  //     const dataArray = await Sell.aggregate([
  //       { $unwind: "$city" },
  //       {$group: {
  //           _id: "$city",
  //           wasteSum: { $sum: { $add: "$weightInKg" } },
  //           count: { $sum: 1 }  } },
  //           {$sort : { _id : 1 }} ]);
  //   return res.status(200).json(await responseTemplate(true, "city wise data sended.", dataArray, null));
  //   } catch (e) {
  //     console.log(`error ${e}`);
  //     return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
  //   }
  // }
  const WasteTypeTotalData = async(req,res)=>{
    try {
      const dataArray = await Sell.aggregate([
        { $unwind: "$wasteType" },
        {$group: {
            _id: "$wasteType",
            wasteWeightInKgSum: { $sum: { $add: "$weightInKg" } } } },
            {$sort : { _id : 1 }} ]);
    return res.status(200).json(await responseTemplate(true, "Waste type total data.", dataArray, null));
    } catch (e) {
      console.log(`error ${e}`);
      return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
  }
module.exports = { getSellDataByParams, getSellData, WasteTypeTotalData };  