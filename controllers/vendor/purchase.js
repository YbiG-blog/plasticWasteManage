const { responseTemplate, responseMessage } = require("../../utils/errorResponse");
const Purchase = require("../../models/Purchase");

const addPurchase = async ({ body, user }, res) => {
    try {
        const { sellerId, contact, wasteFrom, wasteType, weightInKg, address } = body;
        const { _id, name } = user;
        const dataEntry = new Purchase({
            vendorId : _id, sellerId, name: name, contact, wasteFrom, wasteType, weightInKg, purchasePricePerKg, address 
        });
        await dataEntry.save();
        return res.status(201).json(await responseTemplate(true, "Purchase ADDED", dataEntry, null));        
    } catch (e) {
        console.log(`error ${e}`);
        return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
};

module.exports = { addPurchase };