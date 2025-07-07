const { hotelsSimlaturInstance, getHotels } = require("./axiosInstances/hotelsSimulatorInstance");
const { parseHotelSimulatorsData } = require("./parsers/hotelsSimulatorParser");

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionSuccessStatus: 200
}

const providers = [
  {
    providerInstance: hotelsSimlaturInstance,
    fetchMethod: getHotels,
    parseMethod: parseHotelSimulatorsData
  }
]

module.exports = {
  corsOptions,
  providers
}