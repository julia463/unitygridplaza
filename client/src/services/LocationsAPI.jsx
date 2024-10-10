const getAllLocations = async () => {
  try {
    const response = await fetch("http://localhost:3000/locations");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
  }
};

//Need to get all events for this location

const getEventsForLocation = async (locationId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/locations/${locationId}/events`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error getting the events for this location", error);
  }
};

const getLocationById = async (locationId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/locations/${locationId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error getting location", error);
  }
};

export default { getAllLocations, getEventsForLocation, getLocationById };
