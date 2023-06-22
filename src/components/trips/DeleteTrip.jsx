import { useParams } from "react-router-dom";
import { deleteTrip } from "../../api/api";

const DeleteTrip = () => {
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      await deleteTrip(id);
      window.location.href = "/trips";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete Trip</h2>
      <p>Are you sure you want to delete this trip?</p>
      <button onClick={handleDelete}>Delete Trip</button>
    </div>
  );
};

export default DeleteTrip;
