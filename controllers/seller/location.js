const { responseTemplate, responseMessage } = require("../../utils/errorResponse");
const Location = require("../../models/Location");

const addLocation = async ({ body, user }, res) => {
    try {
        const { location } = body;
        const { _id } = user;
        const addLocation = new Location({
            sellerId: _id, location  });
            await addLocation.save();
    return res.status(201).json(await responseTemplate(true, "Location added", addLocation, null));
    } catch (e) {
        console.log(`error ${e}`);
        return res.status(500).json(await responseTemplate(false, responseMessage.serverError, null, e));
    }
};

const getLocationResult = async ( { body }, res )=>{
    try {
        const { longitude, latitude } = body;
          const getResult = await Location.aggregate([
             { $geoNear:{
                near : { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude )] },
                key : "location.coordinates",
                maxDistance : parseFloat(1000)*3000,
                distanceField : "dist.calculated",
                spherical : true  } }
            ,{$lookup :{
            from : "sellers",
            localField : "sellerId",
            foreignField : "_id",
            as : "seller" }
        },{$project : { seller: { name :1, phone :1, email:1, city: 1}}} 
    ]);
                
        return res.status(200).json({ success: true, message : "get result " , data: getResult });
    } catch (e) {
        return res.status(500).json({ success: false, message : responseMessage.serverError , data: null, error: e.message });          
    }
}
module.exports = { addLocation, getLocationResult  };