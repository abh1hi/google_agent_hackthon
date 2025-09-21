const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  temperature: { type: Number, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Weather', weatherSchema);
