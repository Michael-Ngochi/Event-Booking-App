import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import './App.css'
import MyBookings from './components/MyBookings';
import ContactUs from './components/ContactUs';
const API_URL = import.meta.env.VITE_API_BASE_URL;

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
