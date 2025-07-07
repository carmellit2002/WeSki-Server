const parseHotelSimulatorsData = (hotels) => {
    let parsedHotels = []

    for (hotel of hotels) {
        const parsedHotel = {
            id: hotel.HotelCode,
            name: hotel.HotelName,
            rating: hotel.HotelInfo.Rating,
            bedCount: hotel.HotelInfo.Beds,
            // location: hotel.HotelInfo.Position
            location: "Location",
            price: hotel.PricesInfo.AmountAfterTax,
            mainImage: hotel.HotelDescriptiveContent.Images.find((image) => image.MainImage === true).URL
        }

        parsedHotels = [...parsedHotels, parsedHotel];
    }

    return parsedHotels;
}

module.exports = {
    parseHotelSimulatorsData
};
