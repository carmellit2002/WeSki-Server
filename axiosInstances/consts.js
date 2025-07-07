const BASE_SERVER_URL = "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator";

const HOTELS_SIMULATOR_REQUESTOR_CONFIG = {
    baseURL: BASE_SERVER_URL,
    headers: { 'Access-Control-Allow-Origin': true }
};

const HOTELS_SIMULATOR_ROUTES = {
    API: {
        GET_HOTELS: "default/HotelsSimulator",
    }
};

const ERRORS = {
    GET_HOTELS: "Could not retrieve hotels from the provider."
};

module.exports = {
    HOTELS_SIMULATOR_REQUESTOR_CONFIG,
    HOTELS_SIMULATOR_ROUTES,
    ERRORS
};