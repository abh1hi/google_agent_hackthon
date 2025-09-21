const express = require('express');
const Weather = require('../models/Weather');
const router = express.Router();

// Get weather by city
router.get('/', async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ message: 'City is required' });
    }
    const weather = await Weather.findOne({ city: { $regex: city, $options: 'i' } });
    if (!weather) {
      return res.status(404).json({ message: 'Weather data not found for this city' });
    }
    res.json(weather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
