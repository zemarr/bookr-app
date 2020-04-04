const Booking = require('../models/Booking')


module.exports.readAllBooking = (req, res) => {
  Booking.find()
  .then(Bookings => res.json(Bookings))
  .catch(err => res.status(400).json({error: err, message: "Bookings cannot be fetched!"}));

}

module.exports.bookRoom = (req, res) => {
    const room = req.body;
    let name = room.room;
    let time = room.startDate
    Booking.findOne({ room : name, startDate : time})
    .then((booked) => {
      if(booked) {
        return res.json({message:'This Room Already has Meeting Scheduled, Please choose A Different Time or Room'});
      } else {
        new Booking (room).save()
        .then(() => res.json({message: 'Booked!'}))
        .catch(err => res.status(400).json({error: err, message: "Room booking error"}));
      
      }
    })
   
  
  }
