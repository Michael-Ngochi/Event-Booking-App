
import { useEffect, useState } from "react";
import EventList from "./EventList";

const MyBookings = ({ events, onSelect }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bookings')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
    
  const bookedEventIds = bookings.map(b => String(b.eventId));
  const myEvents = events.filter(e => bookedEventIds.includes(e.id));

  const handleRemoveBooking = (eventId) => {
    const booking = bookings.find(b => b.eventId === eventId);
    if (!booking);
    fetch(`http://localhost:4000/bookings/${booking.id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setBookings(prev => prev.filter(b => b.id !== booking.id));
        } else {
          throw new Error("Failed to delete booking");
        }
      })


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
    
}
}

export default MyBookings;