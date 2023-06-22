import { useEffect, useState } from "react";
import { getTripList } from "../../api/api";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTripList();
  }, []);

  const fetchTripList = async () => {
    try {
      const tripList = await getTripList();
      setTrips(tripList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>{trip.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
