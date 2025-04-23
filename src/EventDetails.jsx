import { useState } from 'react';
import './EventDetails.css'

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

  const handleSubmit = e => {
    e.preventDefault();

    const booking = {
      ...form,
      eventId: event.id,
      bookingTime: new Date().toISOString()
    };

    fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => {
        if (res.ok) {
          setSuccess(true);
          setForm({ name: '', email: '', phoneNo: '', noOfTickets: 1 });
        }
      });
  };

  return (
    <div className="event-details">
      <img src={event.coverPhoto} alt={event.title} className="event-details-img" />
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Price:</strong> KES {event.price}</p>
      <p><strong>Tickets Left:</strong> {event.tickets}</p>

      <hr />

      <h3>Book Your Spot</h3>
      {success && <p style={{ color: 'green' }}>Booking successful!</p>}
      <form onSubmit={handleSubmit} className="booking-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="phoneNo" value={form.phoneNo} onChange={handleChange} placeholder="Phone Number" required />
        <input name="noOfTickets" type="number" min="1" max={event.tickets} value={form.noOfTickets} onChange={handleChange} placeholder="No. of Tickets" required />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default EventDetails;