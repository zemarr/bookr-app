const Room = require('../models/Rooms')


module.exports.readAllRooms = (req, res) => {
  Room.find()
  .then(rooms => res.json(rooms))
  .catch(err => res.status(400).json({error: err, message: "orders cannot be fetched!"}));

}

module.exports.addRoom = (req, res) => {
    const room = req.body;

    if (room.name){
  
      const newRoom = new Room(room);
    
      newRoom.save()
        .then(() => res.json({message: 'Room Added!'}))
        .catch(err => res.status(400).json({error: err, message: "Room wasn't added"}));
      
      
    } else {
      res.status(401).json({message: "invalid  params"});
    };

}
