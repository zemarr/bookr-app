const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// create Schema
const SubscriberSchema = new Schema({
    email: {
        type: email,
        unique: true,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports =  Subscriber = mongoose.model('subscribers', SubscriberSchema)