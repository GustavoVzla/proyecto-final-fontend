import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTripDetail } from "../../api/api";

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    fetchTripDetail();
  }, []);

  const fetchTripDetail = async () => {
    try {
      const tripDetail = await getTripDetail(id);
      setTrip(tripDetail);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Trip Detail</h2>
      {trip ? (
        <div>
          <h3>{trip.name}</h3>
          <p>{trip.description}</p>
        </div>
      ) : (
        <p>Loading trip detail...</p>
      )}
    </div>
  );
};

export default TripDetail;
