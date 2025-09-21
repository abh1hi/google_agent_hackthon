const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['food', 'museum', 'historical', 'nightlife'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Attraction', attractionSchema);
