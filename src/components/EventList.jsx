import EventCard from "./EventCard";

const EventList = ({ events, bookings, onRemove }) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          bookings={bookings}
          key={event.id}
          event={event}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default EventList;
