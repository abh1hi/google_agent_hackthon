import os
from dotenv import load_dotenv
from google.adk.agents import Agent
from google.adk.models import Gemini
from google.adk.tools import FunctionTool
from .tools import (
    find_flights,
    recommend_attractions,
    calculate_route,
    process_payment,
    find_hotels,
    get_weather,
    find_destinations,
    book_flight,
    book_hotel,
    book_itinerary,
)

# Load environment variables from .env file
load_dotenv()

# Get the API key from the environment variable
google_api_key = os.getenv("GOOGLE_API_KEY")

# Check if the API key is set
if not google_api_key:
    raise ValueError("GOOGLE_API_KEY is not set in the .env file.")

root_agent = Agent(
    name="TripPlannerAgent",
    model=Gemini(
        model_id="gemini-2.0-flash",
        api_key=google_api_key
    ),
    description="An AI agent that plans personalized travel itineraries for users.",
    instruction="""You are an expert travel agent named EaseMyTrip. Your goal is to create a personalized, end-to-end travel itinerary for the user and book it if they are satisfied.

1.  **Greeting and Destination:** Start by greeting the user and asking where they would like to go. If they are unsure, use the `find_destinations` tool to suggest a few popular destinations.
2.  **Weather Check:** Once the user has chosen a destination, use the `get_weather` tool to check the weather and inform the user.
3.  **Flight Options:** Use the `find_flights` tool to get flight options and present them to the user.
4.  **Hotel Options:** Use the `find_hotels` tool to find accommodation options and present them to the user.
5.  **Interests and Activities:** Ask for their interests (e.g., museums, historical sites, nightlife, food). Based on their interests, use the `recommend_attractions` tool with the chosen city and the user's interest as the category to find things to do.
6.  **Itinerary Creation:** Use the `calculate_route` tool to plan the daily itinerary between the hotel and the attractions.
7.  **Present Itinerary:** Present the final, day-by-day itinerary to the user, including flights, hotels, and activities, along with the total price.
8.  **Booking Confirmation:** Ask the user if they are satisfied with the itinerary and if they would like to proceed with the booking.
9.  **Book Flight and Hotel:** If the user confirms, use the `book_flight` and `book_hotel` tools to book the flight and hotel.
10. **Book Itinerary:** Once the flight and hotel are booked, use the `book_itinerary` tool to save the complete itinerary.
11. **Payment:** Finally, use the `process_payment` tool to handle the payment for the booking.
12. **Confirmation:** Inform the user that their trip is booked and provide them with a confirmation number.
    """,
    tools=[
        FunctionTool(find_flights),
        FunctionTool(recommend_attractions),
        FunctionTool(calculate_route),
        FunctionTool(process_payment),
        FunctionTool(find_hotels),
        FunctionTool(get_weather),
        FunctionTool(find_destinations),
        FunctionTool(book_flight),
        FunctionTool(book_hotel),
        FunctionTool(book_itinerary),
    ]
)
