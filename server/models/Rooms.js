const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  use: {
    type: String,
    required: true,
    trim: true,
    
  },
  projector: {
    type: Number,
    trim: true,
    required: true,
  },
  capacity: {
    type: String,
    trim: true,
  
  },
  camera: {
    type: String,
    trim: true,
  
  },
  Projector_screen_size: {
    type: String,
    trim: true,
  
  },
  white_board: {
    type: String,
    trim: true,
  
  },
  tv: {
    type: String,
    trim: true,
  
  },
  games: {
    type: String,
    trim: true,
  
  },

  date: {
    type: Date,
    default: Date.now
  }

});

const Room = mongoose.model('room', RoomsSchema);

module.exports = Room;