//required packages
const mongoose = require('mongoose');
const short_id = require('shortid');

// database schema
const shortSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: short_id.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  len:{
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('shorten', shortSchema);