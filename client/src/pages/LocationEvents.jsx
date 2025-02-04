import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import LocationsAPI from "../services/LocationsAPI.jsx";
import EventsAPI from "../services/EventsAPI.jsx";

import "../css/LocationEvents.css";

//Also need to set the location to the corresponding index
//Need to import the get location events from the api then set it just like they did for locations
const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const locationData = await LocationsAPI.getLocationById(index);
        setLocation(locationData);

        const eventsData = await LocationsAPI.getEventsForLocation(index);
        setEvents(eventsData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </header>

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
            {"No events scheduled at this location yet!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
