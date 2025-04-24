import { useEffect, useState } from "react";
import EventList from "./EventList";
const API_URL = import.meta.env.VITE_API_BASE_URL;

const MyBookings = ({ events, onSelect }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${API_URL}/bookings`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setBookings(data);
        console.log("Fetched bookings:", data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const bookedEventIds = bookings.map(b => String(b.eventId));
  const myEvents = events.filter(e => bookedEventIds.includes(e.id));

  const handleRemoveBooking = async (eventId) => {
    console.log("Attempting to remove eventId:", eventId);
    console.log("Current bookings state:", bookings);

    
    let bookingToRemove = bookings.find(b => String(b.eventId) === String(eventId));

   
    if (!bookingToRemove) {
      bookingToRemove = bookings.find(b => String(b.id) === String(eventId));
      if (bookingToRemove) {
        console.warn("Found booking by 'id' instead of 'eventId'. Ensure consistency in your booking data.");
      }
    }

    if (!bookingToRemove) {
      console.warn(`Booking with eventId ${eventId} not found in current bookings.`);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/bookings/${bookingToRemove.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setBookings(prevBookings => prevBookings.filter(b => b.id !== bookingToRemove.id));
        console.log(`Booking with ID ${bookingToRemove.id} removed successfully.`);
        
      } else {
        const errorData = await res.json();
        console.error("Failed to delete booking:", errorData);
        
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      
    }
  };

  return (
    <div>
      <h2>My Booked Events</h2>
      {myEvents.length > 0 ? (
        <EventList
          bookings={true}
          events={myEvents}
          onSelect={onSelect}
          onRemove={handleRemoveBooking}
        />
      ) : (
        <p>You haven't booked any events yet.</p>
      )}
    </div>
  );
};

export default MyBookings;