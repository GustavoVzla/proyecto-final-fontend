import { useState } from "react";
import { useParams } from "react-router-dom";
import { createVote } from "../../api/api";

const CreateVote = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Number(value)) alert("El valor debe ser un número");

    try {
      await createVote(id, value);

      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Vote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Create Vote</button>
      </form>
    </div>
  );
};

export default CreateVote;
