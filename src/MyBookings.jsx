import EventList from "./EventList";

const MyBookings = ({ events,MyBookings,onSelect}) => {
    const bookedEventIds = MyBookings.map(b => b.eventId);
    const myEvents = events.filter(e => bookedEventIds.includes(e.id));
}