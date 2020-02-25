const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    firstname: {
        type: string,
        required: true,
        trim: true
    },
    lastname: {
        type: string,
        required: true,
        trim: true
    },
    value: {
        type: string,
        required: true,
        trim: true
    },    
    date: {
        type: Date,
        type: string,
    }
});

 const Booking = mongoose.model('booking', BookingSchema);

 module.exports = Booking 