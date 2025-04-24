import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, bookings, onRemove }) => {
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onRemove) {
      onRemove(event.id);
    }
  };

  return (
    <Link to={`/events/${event.id}`} className="event-card-link">
      <div className="event-card">
        <img src={event.coverPhoto} alt={event.title} className="event-img" />
        <div className="event-info">
          <h3>{event.title}</h3>
          <p>{event.date} @ {event.location}</p>
          <p>KES {event.price} per ticket</p>
          {bookings && (
            <button onClick={handleRemoveClick}>Remove</button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;