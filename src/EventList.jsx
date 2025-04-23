import EventCard from './EventCard';

const EventList = ({ events, onSelect }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default EventList;