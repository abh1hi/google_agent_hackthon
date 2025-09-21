// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const Airline = require('./models/Airline');
const Airport = require('./models/Airport');
const Flight = require('./models/Flight');
const User = require('./models/User');
const Booking = require('./models/Booking');
const Destination = require('./models/Destination');
const Hotel = require('./models/Hotel');
const Weather = require('./models/Weather');
const HotelBooking = require('./models/HotelBooking');
const Itinerary = require('./models/Itinerary');
const Attraction = require('./models/Attraction');

const seed = async () => {
  try {
    await connectDB();

    // Clean DB
    await Airline.deleteMany();
    await Airport.deleteMany();
    await Flight.deleteMany();
    await User.deleteMany();
    await Booking.deleteMany();
    await Destination.deleteMany();
    await Hotel.deleteMany();
    await Weather.deleteMany();
    await HotelBooking.deleteMany();
    await Itinerary.deleteMany();
    await Attraction.deleteMany();

    // --- USERS ---
    const users = [];
    for (let i = 0; i < 20; i++) {
      users.push({
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        password: 'password123',
      });
    }
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users created.`);

    // --- AIRLINES ---
    const airlineData = [
      { name: 'Air India', code: 'AI', country: 'India' },
      { name: 'IndiGo', code: '6E', country: 'India' },
      { name: 'Vistara', code: 'UK', country: 'India' },
      { name: 'SpiceJet', code: 'SG', country: 'India' },
      { name: 'Go First', code: 'G8', country: 'India' },
      { name: 'AirAsia India', code: 'I5', country: 'India' },
      { name: 'Emirates', code: 'EK', country: 'UAE' },
      { name: 'Qatar Airways', code: 'QR', country: 'Qatar' },
      { name: 'Singapore Airlines', code: 'SQ', country: 'Singapore' },
      { name: 'Lufthansa', code: 'LH', country: 'Germany' },
      { name: 'British Airways', code: 'BA', country: 'UK' },
      { name: 'Cathay Pacific', code: 'CX', country: 'Hong Kong' },
      { name: 'Qantas', code: 'QF', country: 'Australia' },
      { name: 'KLM', code: 'KL', country: 'Netherlands' },
      { name: 'Turkish Airlines', code: 'TK', country: 'Turkey' },
      { name: 'Etihad Airways', code: 'EY', country: 'UAE' },
      { name: 'Japan Airlines', code: 'JL', country: 'Japan' },
      { name: 'All Nippon Airways', code: 'NH', country: 'Japan' },
      { name: 'Delta Air Lines', code: 'DL', country: 'USA' },
      { name: 'United Airlines', code: 'UA', country: 'USA' },
      { name: 'Air France', code: 'AF', country: 'France' },
    ];
    const airlines = await Airline.insertMany(airlineData);
    console.log(`${airlines.length} airlines created.`);

    // --- AIRPORTS ---
    const airportData = [
      // India
      { name: 'Indira Gandhi International Airport', code: 'DEL', city: 'Delhi', country: 'India' },
      { name: 'Chhatrapati Shivaji Maharaj International Airport', code: 'BOM', city: 'Mumbai', country: 'India' },
      { name: 'Kempegowda International Airport', code: 'BLR', city: 'Bengaluru', country: 'India' },
      { name: 'Chennai International Airport', code: 'MAA', city: 'Chennai', country: 'India' },
      { name: 'Netaji Subhas Chandra Bose International Airport', code: 'CCU', city: 'Kolkata', country: 'India' },
      
      // International
      { name: 'Dubai International Airport', code: 'DXB', city: 'Dubai', country: 'UAE' },
      { name: 'Hamad International Airport', code: 'DOH', city: 'Doha', country: 'Qatar' },
      { name: 'Singapore Changi Airport', code: 'SIN', city: 'Singapore', country: 'Singapore' },
      { name: 'Frankfurt Airport', code: 'FRA', city: 'Frankfurt', country: 'Germany' },
      { name: 'Heathrow Airport', code: 'LHR', city: 'London', country: 'UK' },
      { name: 'Hong Kong International Airport', code: 'HKG', city: 'Hong Kong', country: 'Hong Kong' },
      { name: 'Sydney Airport', code: 'SYD', city: 'Sydney', country: 'Australia' },
      { name: 'Amsterdam Airport Schiphol', code: 'AMS', city: 'Amsterdam', country: 'Netherlands' },
      { name: 'Istanbul Airport', code: 'IST', city: 'Istanbul', country: 'Turkey' },
      { name: 'Abu Dhabi International Airport', code: 'AUH', city: 'Abu Dhabi', country: 'UAE' },
      { name: 'Narita International Airport', code: 'NRT', city: 'Tokyo', country: 'Japan' },
      { name: 'Haneda Airport', code: 'HND', city: 'Tokyo', country: 'Japan' },
      { name: 'John F. Kennedy International Airport', code: 'JFK', city: 'New York', country: 'USA' },
      { name: 'Los Angeles International Airport', code: 'LAX', city: 'Los Angeles', country: 'USA' },
      { name: 'Hartsfield-Jackson Atlanta International Airport', code: 'ATL', city: 'Atlanta', country: 'USA' },
      { name: 'Charles de Gaulle Airport', code: 'CDG', city: 'Paris', country: 'France' },
      { name: 'Suvarnabhumi Airport', code: 'BKK', city: 'Bangkok', country: 'Thailand' },
      { name: 'Incheon International Airport', code: 'ICN', city: 'Seoul', country: 'South Korea' },
    ];
    const airports = await Airport.insertMany(airportData);
    console.log(`${airports.length} airports created.`);

    // --- DESTINATIONS ---
    const destinationData = [
        { city: 'Paris', country: 'France', description: 'The city of love and lights.' },
        { city: 'Rome', country: 'Italy', description: 'Home to ancient ruins and the Vatican.' },
        { city: 'Tokyo', country: 'Japan', description: 'A bustling metropolis with a unique culture.' },
        { city: 'Sydney', country: 'Australia', description: 'Famous for its opera house and harbor.' },
        { city: 'Cairo', country: 'Egypt', description: 'Gateway to the pyramids and ancient history.' },
        { city: 'New York', country: 'USA', description: 'The city that never sleeps.' },
        { city: 'London', country: 'UK', description: 'A historic city with modern marvels.' },
        { city: 'Bangkok', country: 'Thailand', description: 'Known for its vibrant street life and temples.' },
        { city: 'Rio de Janeiro', country: 'Brazil', description: 'Famous for its Carnival and beaches.' },
        { city: 'Moscow', country: 'Russia', description: 'Home to the Kremlin and Red Square.' },
        { city: 'Dubai', country: 'UAE', description: 'A futuristic city in the desert.' },
        { city: 'Singapore', country: 'Singapore', description: 'A green and modern city-state.' },
        { city: 'Barcelona', country: 'Spain', description: 'Known for its unique architecture.' },
        { city: 'Los Angeles', country: 'USA', description: 'The heart of the entertainment industry.' },
        { city: 'Amsterdam', country: 'Netherlands', description: 'Famous for its canals and art.' },
        { city: 'Hong Kong', country: 'China', description: 'A vibrant and densely populated city.' },
        { city: 'Berlin', country: 'Germany', description: 'A city with a rich and complex history.' },
        { city: 'Prague', country: 'Czech Republic', description: 'A fairytale city with a stunning castle.' },
        { city: 'Vienna', country: 'Austria', description: 'The city of music and imperial palaces.' },
        { city: 'Seoul', country: 'South Korea', description: 'A high-tech city with a traditional soul.' },
    ];
    const destinations = await Destination.insertMany(destinationData);
    console.log(`${destinations.length} destinations created.`);

    // --- HOTELS ---
    const hotelData = [
        { name: 'Hotel Le Bristol', city: 'Paris', country: 'France', pricePerNight: 1200, rating: 5 },
        { name: 'The Ritz Paris', city: 'Paris', country: 'France', pricePerNight: 1500, rating: 5 },
        { name: 'Hotel de Crillon', city: 'Paris', country: 'France', pricePerNight: 1300, rating: 5 },
        { name: 'The Peninsula Paris', city: 'Paris', country: 'France', pricePerNight: 1400, rating: 5 },
    ];
    const hotels = await Hotel.insertMany(hotelData);
    console.log(`${hotels.length} hotels created.`);

    // --- WEATHER ---
    const weatherData = [
        { city: 'Paris', country: 'France', temperature: 15, description: 'Cloudy' },
        { city: 'London', country: 'UK', temperature: 12, description: 'Rainy' },
        { city: 'New York', country: 'USA', temperature: 18, description: 'Sunny' },
    ];
    const weather = await Weather.insertMany(weatherData);
    console.log(`${weather.length} weather created.`);

    // --- ATTRACTIONS ---
    const attractionData = [
        // Paris
        { name: 'Eiffel Tower', city: 'Paris', country: 'France', description: 'Iconic iron tower, a symbol of France.', category: 'historical' },
        { name: 'Louvre Museum', city: 'Paris', country: 'France', description: 'Home to the Mona Lisa and other famous works of art.', category: 'museum' },
        { name: 'Le Foodist', city: 'Paris', country: 'France', description: 'A cooking school offering a variety of food tours and classes.', category: 'food' },
        { name: 'Secret Food Tours: Paris', city: 'Paris', country: 'France', description: 'A guided walking tour of the best food spots in Paris.', category: 'food' },
        { name: 'Bateaux Parisiens River Cruise', city: 'Paris', country: 'France', description: 'A scenic boat tour along the Seine River.', category: 'nightlife' },
    ];
    const attractions = await Attraction.insertMany(attractionData);
    console.log(`${attractions.length} attractions created.`);

    // --- FLIGHTS ---
    const flights = [];
    const indianAirports = airports.filter(a => a.country === 'India');
    const internationalAirports = airports.filter(a => a.country !== 'India');
    const parisAirport = airports.find(a => a.city === 'Paris');
    const delhiAirport = airports.find(a => a.city === 'Delhi');
    const airFrance = airlines.find(a => a.name === 'Air France');

    // Add a specific flight to Paris
    if (delhiAirport && parisAirport && airFrance) {
        flights.push({
            flightNumber: 'AF225',
            airline: airFrance._id,
            from: delhiAirport._id,
            to: parisAirport._id,
            departureTime: new Date(Date.now() + 24 * 3600 * 1000),
            arrivalTime: new Date(Date.now() + 32 * 3600 * 1000),
            price: 800,
            seatsAvailable: 150,
        });
    }

    // Domestic flights
    for (let i = 0; i < 10; i++) {
      const fromAirport = indianAirports[i % indianAirports.length];
      const toAirport = indianAirports[(i + 1) % indianAirports.length];
      const airline = airlines[i % 6]; // Indian airlines

      flights.push({
        flightNumber: `${airline.code}${100 + i}`,
        airline: airline._id,
        from: fromAirport._id,
        to: toAirport._id,
        departureTime: new Date(Date.now() + (i + 1) * 2 * 3600 * 1000),
        arrivalTime: new Date(Date.now() + (i + 1) * 4 * 3600 * 1000),
        price: Math.floor(Math.random() * 5000) + 3000,
        seatsAvailable: Math.floor(Math.random() * 100) + 50,
      });
    }

    // International flights
    for (let i = 0; i < 10; i++) {
      const fromAirport = indianAirports[i % indianAirports.length];
      const toAirport = internationalAirports[i % internationalAirports.length];
      const airline = airlines[6 + (i % (airlines.length - 6))]; // International airlines

      flights.push({
        flightNumber: `${airline.code}${200 + i}`,
        airline: airline._id,
        from: fromAirport._id,
        to: toAirport._id,
        departureTime: new Date(Date.now() + (i + 1) * 2 * 3600 * 1000),
        arrivalTime: new Date(Date.now() + (i + 1) * 10 * 3600 * 1000),
        price: Math.floor(Math.random() * 20000) + 15000,
        seatsAvailable: Math.floor(Math.random() * 100) + 50,
      });
    }
    
    const createdFlights = await Flight.insertMany(flights);
    console.log(`${createdFlights.length} flights created.`);

    // --- FLIGHT BOOKINGS ---
    const bookings = [];
    for (let i = 0; i < 5; i++) {
      const user = createdUsers[i];
      const flight = createdFlights[i];
      const seats = Math.floor(Math.random() * 2) + 1;
      bookings.push({
        user: user._id,
        flight: flight._id,
        seats: seats,
        totalPrice: flight.price * seats,
      });
    }
    const createdBookings = await Booking.insertMany(bookings);
    console.log(`${createdBookings.length} flight bookings created.`);

    // --- HOTEL BOOKINGS ---
    const hotelBookings = [];
    for (let i = 0; i < 5; i++) {
        const user = createdUsers[i];
        const hotel = hotels[i % hotels.length];
        const checkIn = new Date();
        const checkOut = new Date();
        checkOut.setDate(checkOut.getDate() + 5);
        hotelBookings.push({
            user: user._id,
            hotel: hotel._id,
            checkInDate: checkIn,
            checkOutDate: checkOut,
            totalPrice: hotel.pricePerNight * 5,
        });
    }
    const createdHotelBookings = await HotelBooking.insertMany(hotelBookings);
    console.log(`${createdHotelBookings.length} hotel bookings created.`);

    // --- ITINERARIES ---
    const itineraries = [];
    for (let i = 0; i < 5; i++) {
        const user = createdUsers[i];
        const flightBooking = createdBookings[i];
        const hotelBooking = createdHotelBookings[i];
        itineraries.push({
            user: user._id,
            flightBooking: flightBooking._id,
            hotelBooking: hotelBooking._id,
            activities: ['Eiffel Tower', 'Louvre Museum'],
            totalPrice: flightBooking.totalPrice + hotelBooking.totalPrice,
        });
    }
    await Itinerary.insertMany(itineraries);
    console.log(`${itineraries.length} itineraries created.`);


    console.log('✅ Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    process.exit(1);
  }
};

seed();