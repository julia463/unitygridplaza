import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import LocationsAPI from "../services/LocationsAPI.jsx";
import EventsAPI from "../services/EventsAPI.jsx";

import "../css/LocationEvents.css";

//Also need to set the location to the corresponding index
//Need to import the get location events from the api then set it just like they did for locations
const Events = ({ index }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const eventsData = await EventsAPI.getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="location-events">
      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            {"No events scheduled :(!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default Events;
