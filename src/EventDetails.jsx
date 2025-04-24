import { useState } from 'react';
import './App.css'

const API_URL = import.meta.env.VITE_API_BASE_URL;

const EventDetails = ({ event }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNo: '',
    noOfTickets: 1
  });
  
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const reduceTickets = (eventId, remainingTickets) => {
    return fetch(`${API_URL}/events/${eventId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tickets: remainingTickets })
    });
  };
  

  const handleSubmit = e => {
    e.preventDefault();
  
    const booking = {
      ...form,
      eventId: event.id,
      bookingTime: new Date().toISOString()
    };
  
    fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(r => {
        if (!r.ok) throw new Error('Booking failed');
        return r.json();
      })
      .then(() => {
        const remainingTickets = event.tickets - parseInt(form.noOfTickets);
        return reduceTickets(event.id, remainingTickets);
      })
      .then(res => {
        if (res.ok) {
          setSuccess(true);
          setForm({ name: '', email: '', phoneNo: '', noOfTickets: 1 });
          event.tickets -= parseInt(form.noOfTickets); 
        }
      })
      .catch(err => {
        console.error(err);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="event-details">
      <img src={`${event.coverPhoto}`} alt={event.title} className="event-details-img" />
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Price:</strong> KES {event.price}</p>
      <p><strong>Tickets Left:</strong> {event.tickets}</p>

        
     
      {event.tickets >0 ?(
      <>
      <h3>Book Your Spot</h3>
      {success && (<p style={{ color: 'white',background:"green",borderRadius:"10px",fontWeight:"bold",textAlign:"center",fontSize:"20px" }}>Booking successful!</p>)}
      <form onSubmit={handleSubmit} className="booking-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="phoneNo" value={form.phoneNo} onChange={handleChange} placeholder="Phone Number" required />
        <input name="noOfTickets" type="number" min="1" max={event.tickets} value={form.noOfTickets} onChange={handleChange} placeholder="No. of Tickets" required />
        <button type="submit">Confirm Booking</button>
      </form>
      </>
      ):(<p style={{ color: "crimson", fontWeight: "bold", fontSize: "18px" }}><strong>Sorry. This event in fully booked :(</strong></p>)
      }
 </div>
  );
};

export default EventDetails;