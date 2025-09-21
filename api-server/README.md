# Travel API

This is a Node.js + MongoDB API for a travel website.

## Features
- User authentication (JWT)
- Manage flights, destinations, airlines, airports
- Book flights
- Admin-only CRUD routes
- Seed script to populate sample data

## Setup
```bash
npm install
cp .env.example .env
npm run seed
npm run dev
```

## Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/flights`
- `POST /api/flights` (admin)
- `GET /api/destinations`
- `POST /api/destinations` (admin)
- `POST /api/bookings` (user)
- `GET /api/bookings/my` (user)
