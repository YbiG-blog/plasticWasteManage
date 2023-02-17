const { responseTemplate, responseMessage } = require("../../utils/errorResponse");
const Sell = require("../../models/Sell");

const addSell = async ({ body, user }, res) => {
    try {
        const { contact, wasteFrom, wasteType, weight, Address } = body;
        const { _id, name } = user;
        const dataEntry = new Sell({
            sellerId: _id, name: name, contact, wasteFrom, wasteType, weight, Address
        });
        dataEntry.save();
        return res.status(201).json(await responseTemplate(true, responseMessage.saveDataSuccess("frontPage"), dataEntry, null));        
    } catch (e) {
        console.log(`error ${e}`);
        return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
};

module.exports = { addSell };