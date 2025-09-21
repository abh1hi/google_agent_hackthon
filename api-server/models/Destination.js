const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);