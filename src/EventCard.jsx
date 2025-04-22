import React from 'react'

const EventCard = ({ event, onSelect }) => {
    return (
      <div className="event-card" onClick={() => onSelect(event)}>
        <img src={event.coverPhoto} alt={event.title} className="event-img" />
        <div className="event-info">
          <h3>{event.title}</h3>
          <p>{event.date} @ {event.location}</p>
          <p>KES {event.price} per ticket</p>
        </div>
      </div>
    );
  };
  
  export default EventCard;
  