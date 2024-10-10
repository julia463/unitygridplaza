import React, { useState, useEffect } from "react";
import EventsAPI from "../services/EventsAPI";
import "../css/Event.css";

const Event = (props) => {
  const [event, setEvent] = useState([]);
  const [time, setTime] = useState([]);
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const eventData = await EventsAPI.getEventById(props.id);
        console.log("Event Data is" + eventData.image);
        setEvent(eventData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <article className="event-information">
      <img src={event.image} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{event.title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {event.date}{" "}
            <br /> {time}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Event;
