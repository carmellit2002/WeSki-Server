const asyncHandler = require("express-async-handler");
const hotelsService = require("../services/hotelsService");
const { providers } = require("../consts");

const getHotels = asyncHandler(async (req, res, next) => {
    const destinationId = req.query.destinationId;
    const groupSize = req.query.groupSize;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    let hotels = [];

    for (provider of providers) {
        const fetchedHotels = await hotelsService.getHotelsFromProvider(provider.fetchMethod, provider.parseMethod, destinationId, groupSize, startDate, endDate);
        hotels = [...hotels, ...fetchedHotels];
    }
    
    res.send(hotels);
});

module.exports = {
    getHotels
};