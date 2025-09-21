const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  rating: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);
