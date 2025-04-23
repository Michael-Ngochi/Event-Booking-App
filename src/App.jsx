import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import EventList from './EventList';
import EventDetails from './EventDetails';
import './App.css'
import MyBookings from './MyBookings';

function App() {
  const [view, setView] = useState('home');
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookings, setBookings] = useState([]);


  useEffect(() => {
    fetch('http://localhost:4000/bookings')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setView('eventDetails');
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <EventList events={events} onSelect={handleSelectEvent} />;
      case 'eventDetails':
        return selectedEvent && <EventDetails event={selectedEvent} />;
      case 'bookings':
        return <MyBookings
        events={events}
        bookings={bookings}
        onSelect={handleSelectEvent}
      />
      case 'contact':
        return <h2>Contact Us</h2>;
      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div>
      <Navbar onNavigate={setView} />
      <main style={{ padding: '2rem' }}>
        {renderView()}
      </main>
    </div>
  );
}

export default App;
