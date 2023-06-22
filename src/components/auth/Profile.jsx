import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
