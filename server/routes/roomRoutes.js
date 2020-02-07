module.exports =(app) => {
   const roomResource = require('../controllers/roomControllers');

   app.route("/marketingroom")
    .get(roomResource.readMRooms);

    app.route("/salesroom")
    .get(roomResource.readSRooms);

    app.route("/boardroom")
    .get(roomResource.readBRooms);

    app.route("/techroom")
    .get(roomResource.readTRooms);

    app.route("/allroom")
    .get(roomResource.readARooms);
}




