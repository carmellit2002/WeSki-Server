const axios = require("axios");
const { HOTELS_SIMULATOR_REQUESTOR_CONFIG, HOTELS_SIMULATOR_ROUTES, ERRORS } = require("./consts");

const hotelsSimulatorRequestor = axios.create(HOTELS_SIMULATOR_REQUESTOR_CONFIG);

const getHotels = async (destinationId, groupSize, startDate, endDate) => {
    const requestBody = { 
        query: {
            ski_site: parseInt(destinationId),
            from_date: startDate,
            to_date: endDate,
            group_size: parseInt(groupSize)
        }
    };

    try {
        const response = await hotelsSimulatorRequestor.post(HOTELS_SIMULATOR_ROUTES.API.GET_HOTELS, requestBody);
        const data = response.data.body.accommodations || [];
        return data;
    } catch (e) {
        console.log(ERRORS.GET_HOTELS, e);
        return undefined;
    };
};

module.exports = {
    hotelsSimulatorRequestor,
    getHotels
};