import EventList from "./EventList";
import { useEffect,useState } from "react";

const MyBookings = ({ events, onSelect }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bookings')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
    
  const bookedEventIds = bookings.map(b => String(b.eventId));
  const myEvents = events.filter(e => bookedEventIds.includes(e.id));

    return (
      <div>
      <h2>My Booked Events</h2>
          {myEvents.length > 0 ? (
            <EventList bookings={true} events={myEvents} onSelect={onSelect} />
          ) : (
            <p>You haven't booked any events yet.</p>
          )}
        </div>
      );
    
}


export default MyBookings;