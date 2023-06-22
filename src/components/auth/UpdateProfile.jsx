import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { updateUserProfile } from "../../api/api";

const UpdateProfile = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) alert("Please fill in all fields!");

    try {
      await updateUserProfile(user.id, name, email, password);

      handleLogout();

      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
