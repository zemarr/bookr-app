module.exports =(app) => {
   const roomResource = require('../controllers/roomControllers');
    const bookingResource = require('../controllers/bookingController')
   app.route("/allrooms")
    .get(roomResource.readAllRooms)
    .post(roomResource.addRoom);

    app.route("/api/roombookings")
    .get(bookingResource.readAllBooking)
    .post(bookingResource.bookRoom);
}




