const getHotelsFromProvider = async (fetchMethod, parseMethod, destinationId, groupSize, startDate, endDate) => {
    const hotels = await fetchMethod(destinationId, groupSize, startDate, endDate);
    const parsedHotels = parseMethod(hotels);

    return parsedHotels;
};

module.exports = {
    getHotelsFromProvider
};
