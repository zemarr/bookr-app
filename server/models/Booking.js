const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    meetingTitle: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true,
        trim: true
        
    },
    room: {
        type: String,
        required: true,
        trim: true
    }   
   
});

 const Booking = mongoose.model('booking', BookingSchema);

 module.exports = Booking 