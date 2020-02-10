module.exports =(app) => {
   const roomResource = require('../controllers/roomControllers');

   app.route("/allrooms")
    .get(roomResource.readAllRooms)
    .post(roomResource.addRoom)
}




