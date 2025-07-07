const axios = require("axios");
const { HOTELS_SIMULATOR_REQUESTOR_CONFIG, HOTELS_SIMULATOR_ROUTES, ERRORS } = require("./consts");

const hotelsSimulatorRequestor = axios.create(HOTELS_SIMULATOR_REQUESTOR_CONFIG);

const getHotels = async (destinationId, groupSize, startDate, endDate) => {
    console.log("params:", destinationId, groupSize, startDate, endDate);
    const requestBody = { 
        query: {
            ski_site: destinationId,
            from_date: startDate,
            to_date: endDate,
            group_size: groupSize
        }
    };

    try {
        const response = await hotelsSimulatorRequestor.post(HOTELS_SIMULATOR_ROUTES.API.GET_HOTELS, requestBody);
        console.log("Data received in POST request to the provider for hotels:", response.data);
        return response.data;
    } catch (e) {
        console.log(ERRORS.GET_HOTELS, e);
        return undefined;
    };
};

module.exports = {
    hotelsSimulatorRequestor,
    getHotels
};