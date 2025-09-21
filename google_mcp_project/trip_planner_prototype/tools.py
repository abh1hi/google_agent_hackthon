import requests

API_BASE_URL = "http://localhost:3000/api"

def find_flights(destination: str) -> str:
    """Finds flight options for a given destination by calling the external API.

    Args:
        destination: The desired travel destination.

    Returns:
        A JSON string of flight data from the API.
    """
    try:
        response = requests.get(f"{API_BASE_URL}/flights", params={"destination": destination})
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to fetch flight information. {e}"

def find_destinations() -> str:
    """Finds all available destinations by calling the external API.

    Returns:
        A JSON string of destination data from the API.
    """
    try:
        response = requests.get(f"{API_BASE_URL}/destinations")
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to fetch destination information. {e}"

def recommend_attractions(city: str, category: str) -> str:
    """Recommends attractions based on a destination and category.

    Args:
        city: The city to find attractions in.
        category: The category of attractions to recommend (e.g., food, museum, historical, nightlife).

    Returns:
        A JSON string of attraction data from the API.
    """
    try:
        response = requests.get(f"{API_BASE_URL}/attractions", params={"city": city, "category": category})
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to fetch attraction information. {e}"

def book_flight(flight_id: str) -> str:
    """Books a flight with a given ID. This is an admin-only tool.

    Args:
        flight_id: The ID of the flight to book.

    Returns:
        A JSON string confirming the booking.
    """
    # This endpoint is noted as admin-only.
    try:
        response = requests.post(f"{API_BASE_URL}/bookings", json={"flightId": flight_id})
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to book flight. {e}"

def calculate_route(origin: str, destination: str) -> str:
    """Calculates the route between an origin and a destination.

    Args:
        origin: The starting point of the route.
        destination: The end point of the route.

    Returns:
        A string describing the calculated route.
    """
    # This is a placeholder. A real implementation would call a mapping service.
    return f"Calculated route from {origin} to {destination}: Take a taxi, then a flight, then another taxi."

def process_payment(amount: float, currency: str) -> str:
    """Processes a payment for a given amount and currency.

    Args:
        amount: The amount to be paid.
        currency: The currency of the payment.

    Returns:
        A string confirming the payment.
    """
    # This is a placeholder. A real implementation would call a payment gateway.
    return f"Payment of {amount} {currency} processed successfully."

def find_hotels(city: str) -> str:
    """Finds hotel options for a given city by calling the external API.

    Args:
        city: The desired city to find hotels in.

    Returns:
        A JSON string of hotel data from the API.
    """
    try:
        response = requests.get(f"{API_BASE_URL}/hotels", params={"city": city})
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to fetch hotel information. {e}"

def get_weather(city: str) -> str:
    """Gets the weather for a given city by calling the external API.

    Args:
        city: The city to get the weather for.

    Returns:
        A JSON string of weather data from the API.
    """
    try:
        response = requests.get(f"{API_BASE_URL}/weather", params={"city": city})
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to fetch weather information. {e}"

def book_hotel(hotel_id: str, check_in_date: str, check_out_date: str, total_price: float) -> str:
    """Books a hotel with a given ID.

    Args:
        hotel_id: The ID of the hotel to book.
        check_in_date: The check-in date.
        check_out_date: The check-out date.
        total_price: The total price of the booking.

    Returns:
        A JSON string confirming the booking.
    """
    try:
        response = requests.post(f"{API_BASE_URL}/hotel-bookings", json={
            "hotel": hotel_id,
            "checkInDate": check_in_date,
            "checkOutDate": check_out_date,
            "totalPrice": total_price,
        })
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to book hotel. {e}"

def book_itinerary(flight_booking_id: str, hotel_booking_id: str, activities: list[str], total_price: float) -> str:
    """Books a complete itinerary.

    Args:
        flight_booking_id: The ID of the flight booking.
        hotel_booking_id: The ID of the hotel booking.
        activities: A list of planned activities.
        total_price: The total price of the itinerary.

    Returns:
        A JSON string confirming the itinerary booking.
    """
    try:
        response = requests.post(f"{API_BASE_URL}/itineraries", json={
            "flightBooking": flight_booking_id,
            "hotelBooking": hotel_booking_id,
            "activities": activities,
            "totalPrice": total_price,
        })
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return f"Error: Failed to book itinerary. {e}"