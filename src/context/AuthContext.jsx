import { createContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const userData = await loginUser(email, password);
      setUser(userData);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const newUser = await registerUser(userData);
      setUser(newUser);
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await checkAuth(); // Realiza la solicitud a la API para verificar la autenticación
        setUser(userData); // Actualiza el estado con los datos del usuario si está autenticado
        setLoading(false); // Indica que la verificación ha finalizado
      } catch (error) {
        console.error("Error checking authentication:", error);
        setLoading(false); // Indica que la verificación ha finalizado incluso en caso de error
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
