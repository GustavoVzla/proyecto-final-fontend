import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { user, loginUser, registerUser, logoutUser } = useContext(AuthContext);

  return {
    user,
    loginUser,
    registerUser,
    logoutUser,
  };
};

export default useAuth;
