import { useState } from "react";
import { createTrip } from "../../api/api";

const CreateTrip = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) alert("Please fill in all fields");

    try {
      await createTrip(name, description);
      history.push("/trips/allTrips");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Trip</h2>
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
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
};

export default CreateTrip;
