const express = require('express');
const Attraction = require('../models/Attraction');
const router = express.Router();

// Get attractions by city and category
router.get('/', async (req, res) => {
  try {
    const { city, category } = req.query;
    let attractions;
    if (city && category) {
      attractions = await Attraction.find({
        city: { $regex: city, $options: 'i' },
        category: { $regex: category, $options: 'i' }
      });
    } else if (city) {
      attractions = await Attraction.find({ city: { $regex: city, $options: 'i' } });
    } else {
      attractions = await Attraction.find();
    }
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
