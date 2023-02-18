const { responseTemplate, responseMessage } = require("../../utils/errorResponse");
const Sell = require("../../models/Sell");

const addSell = async ({ body, user }, res) => {
    try {
        const { contact, wasteFrom, wasteType, weightInKg, pricePerKg } = body;
        const { _id, name } = user;
        const sellExist = await Sell.findOne({ sellerId: _id, wasteType : wasteType, wasteFrom : wasteFrom });
        if (sellExist)  {
            let previousWeight = sellExist.weightInKg;
             let updatedData = await Sell.findByIdAndUpdate( { _id : sellExist._id },
                {$set : { weightInKg :  weightInKg + previousWeight , pricePerKg }});
            return res.status(201).json(await responseTemplate(true, "SELL ADDED", updatedData, null));   
        }
        const dataEntry = new Sell({
            sellerId: _id, name: name, contact, wasteFrom, wasteType, weightInKg, pricePerKg
        });
       await dataEntry.save();
        return res.status(201).json(await responseTemplate(true, "SELL ADDED", dataEntry, null));        
    } catch (e) {
        console.log(`error ${e}`);
        return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
};

module.exports = { addSell };