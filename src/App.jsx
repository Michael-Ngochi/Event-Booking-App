import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import EventList from './EventList';
import EventDetails from './EventDetails';
import './App.css'
import MyBookings from './MyBookings';
import ContactUs from './ContactUs';

const API_URL = import.meta.env.VITE_API_URL;



const EventDetailsWrapper = ({ events }) => {
  const { id } = useParams();
  const event = events.find(e => String(e.id) === id);

  return event ? (
    <EventDetails event={event} />
  ) : (
    <p>Event not found.</p>
  );
};


function App() {
  const [events, setEvents] = useState([]);



  useEffect(() => {
    fetch(`${API_URL}/events`)
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);



  return (
    <div style={{margin:"0px"}}>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<EventList events={events}  />} />
          <Route path="/bookings" element={<MyBookings events={events} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events/:id" element={<EventDetailsWrapper events={events} />} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
