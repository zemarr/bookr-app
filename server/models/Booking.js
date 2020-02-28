const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        type: String,
    },
    room: {
        type: String,
        required: true,
        trim: true
    }   
   
});

 const Booking = mongoose.model('booking', BookingSchema);

 module.exports = Booking 