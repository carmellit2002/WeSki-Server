const asyncHandler = require("express-async-handler");
const hotelsService = require("../services/hotelsService");
const { providers } = require("../consts");

const getHotels = asyncHandler(async (req, res, next) => {
    const destinationId = req.query.destinationId;
    const groupSize = req.query.groupSize;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    for (provider of providers) {
        const hotels = await hotelsService.getHotelsFromProvider(provider.fetchMethod, destinationId, groupSize, startDate, endDate);
        console.log(hotels);
    }
    
    res.send(hotels);
});

module.exports = {
    getHotels
};