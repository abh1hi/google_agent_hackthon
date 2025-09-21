// models/Flight.js
const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema(
  {
    flightNumber: { type: String, required: true, unique: true },
    airline: { type: mongoose.Schema.Types.ObjectId, ref: 'Airline', required: true },
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport', required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    price: { type: Number, required: true },
    seatsAvailable: { type: Number, default: 100 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Flight', flightSchema);
