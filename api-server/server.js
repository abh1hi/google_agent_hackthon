require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const flightRoutes = require('./routes/flights');
const destinationRoutes = require('./routes/destinations');
const bookingRoutes = require('./routes/bookings');
const hotelRoutes = require('./routes/hotels');
const weatherRoutes = require('./routes/weather');
const hotelBookingRoutes = require('./routes/hotelBookings');
const itineraryRoutes = require('./routes/itineraries');
const attractionRoutes = require('./routes/attractions');

require('./models/Airline');
require('./models/Airport');
require('./models/Destination');
require('./models/Hotel');
require('./models/Weather');
require('./models/HotelBooking');
require('./models/Itinerary');
require('./models/Attraction');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// ✅ Welcome route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Travel API 🚀' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/hotel-bookings', hotelBookingRoutes);
app.use('/api/itineraries', itineraryRoutes);
app.use('/api/attractions', attractionRoutes);

// DB + Server
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
});