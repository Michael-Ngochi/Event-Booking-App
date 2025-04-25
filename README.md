# Eventify - React Event Booking App

A React single-page application for browsing, booking, and managing event tickets. Built from scratch as a Phase 2 project to demonstrate mastery of components, state management, routing, and backend integration using `json-server`.

## Features

- Browse a dynamic list of upcoming events
- View detailed information for each event
- Book tickets via a controlled form
- View and manage your own bookings
- Contact form with client-side validation
- Styled using custom CSS and responsive design principles

## Tech Stack

- React (with React Router)
- json-server (mock RESTful API)
- CSS (custom & responsive)
- Vite (for build optimization)

## Setup Instructions

### Backend Setup

1. Clone the backend repo or set up `json-server`:
   ```bash
   npm install -g json-server
   ```
2. Create a `db.json` file with the following structure:
   ```json
   {
     "events": [ ... ],
     "bookings": []
   }
   ```
3. Run the backend:
   ```bash
   json-server --watch db.json --port 3000
   ```

### Frontend Setup

1. Create a React app:
   ```bash
   npm create vite@latest eventify --template react
   cd eventify
   npm install
   ```
2. Add dependencies:
   ```bash
   npm install react-router-dom
   ```
3. Add `.env.development`:
   ```
   VITE_API_BASE_URL=http://localhost:3000
   ```

### Run the app
```bash
npm run dev
```

## Deployment

- **Frontend:** Recommended using Netlify
- **Backend:** Deploy using Render (supports json-server)

### Redirect Setup for Netlify

Create a `_redirects` file in `public`:
```
/*    /index.html   200
```

## Environment Variables

Use `.env.development` and `.env.production`:
```env
VITE_API_BASE_URL=http://localhost:3000      # development
VITE_API_BASE_URL=https://your-backend-url   # production
```

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── EventList.jsx
│   ├── EventCard.jsx
│   ├── EventDetails.jsx
│   ├── MyBookings.jsx
│   └── ContactUs.jsx
├── App.jsx
├── App.css
public/
└── tent.svg
```

## Example JSON

```json
{
  "events": [
    {
      "id": "1",
      "title": "Nairobi Tech Fest",
      "date": "2025-05-10",
      "location": "KICC, Nairobi",
      "description": "Kenya’s biggest gathering for tech startups and developers.",
      "tickets": 0,
      "price": 500
    }
  ],
  "bookings": []
}
```

## Stretch Goals

- Integrate with an external API
- Add user authentication
- Admin dashboard for event management
- Add ticket QR codes for validation

## Website link

https://event-booking-app-inky.vercel.app/
