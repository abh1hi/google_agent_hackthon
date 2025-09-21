const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flightBooking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  hotelBooking: { type: mongoose.Schema.Types.ObjectId, ref: 'HotelBooking' },
  activities: [{ type: String }],
  totalPrice: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', itinerarySchema);
