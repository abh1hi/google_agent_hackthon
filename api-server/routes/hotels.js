const express = require('express');
const Hotel = require('../models/Hotel');
const router = express.Router();

// Get all hotels, with optional city filter
router.get('/', async (req, res) => {
  try {
    const { city } = req.query;
    let hotels;
    if (city) {
      hotels = await Hotel.find({ city: { $regex: city, $options: 'i' } });
    } else {
      hotels = await Hotel.find();
    }
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
