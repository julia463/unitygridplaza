import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const getAllEvents = async () => {
  try {
    const response = await fetch("http://localhost:3000/events");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
  }
};

const getEventById = async (id) => {
  const response = await fetch(`http://localhost:3000/events/${id}`);
  const data = await response.json();
  return data;
};

export default { getAllEvents, getEventById };
