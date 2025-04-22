import EventList from "./EventList";

const MyBookings = ({ events, bookings, onSelect }) => {
    const bookedEventIds = bookings.map(b => b.eventId);
    const myEvents = events.filter(e => bookedEventIds.includes(e.id));
  
    return (
      <div>
        <h2>My Booked Events</h2>
        {myEvents.length > 0 ? (
          <EventList events={myEvents} onSelect={onSelect} />
        ) : (
          <p>You haven't booked any events yet.</p>
        )}
      </div>
    );
  };

export default MyBookings