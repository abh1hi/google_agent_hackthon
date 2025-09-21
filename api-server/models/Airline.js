// models/Airline.js
const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true }, // e.g. "AI" for Air India
    country: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Airline', airlineSchema);
