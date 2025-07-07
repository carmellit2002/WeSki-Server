const getHotelsFromProvider = async (fetchMethod, parseMethod, destinationId, groupSize, startDate, endDate) => {
    const hotels = await fetchMethod(destinationId, groupSize, startDate, endDate);
    const parsedHotels = parseMethod(hotels);
    console.log(parsedHotels);
};

module.exports = {
    getHotelsFromProvider
};
