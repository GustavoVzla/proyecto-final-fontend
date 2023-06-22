import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTripDetail, updateTrip } from "../../api/api";

const EditTrip = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTripDetail();
  }, []);

  const fetchTripDetail = async () => {
    try {
      const tripDetail = await getTripDetail(id);
      setName(tripDetail.name);
      setDescription(tripDetail.description);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) alert("Please fill in all fields!");

    try {
      await updateTrip(id, name, description);
      history.push("/trips");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Trip</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Update Trip</button>
      </form>
    </div>
  );
};

export default EditTrip;
