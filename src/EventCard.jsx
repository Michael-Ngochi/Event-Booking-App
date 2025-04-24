import React from 'react'
import { Link } from 'react-router-dom';
const EventCard = ({ event }) => {


    return (
      <Link to={`/events/${event.id}`} className="event-card-link">
      <div className="event-card">
        <img src={event.coverPhoto} alt={event.title} className="event-img" />
        <div className="event-info">
          <h3>{event.title}</h3>
          <p>{event.date} @ {event.location}</p>
          {event.tickets!==0?<p>KES {event.price} per ticket</p>:<p style={{background:"red",width:"fit-content",padding:"5px",borderRadius:"10px",fontSize:"large"}}><strong>SOLD OUT</strong></p>}
        </div>
      </div>
      </Link>
    );
  };
  
  export default EventCard;
  