import axios from "axios";

// Configuración global de Axios
axios.defaults.baseURL = "http://localhost:3000";

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post("/api/v1/users/registerUser", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post("/api/v1/users/loginUser", loginData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Función para actualizar el perfil de usuario
export const updateProfile = async (userId, profileData) => {
  try {
    const response = await axios.patch(
      `/api/v1/users/updateProfile/${userId}`,
      profileData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

// Función para subir una imagen de perfil
export const uploadProfileImage = async (userId, imageFile) => {
  try {
    const formData = new FormData();
    formData.append("profileImage", imageFile);

    const response = await axios.patch(
      `/api/v1/users/uploadProfileImage/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error uploading profile image:", error);
    throw error;
  }
};

// Función para obtener detalles de un usuario por ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`/api/v1/users/getUserById/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user by ID:", error);
    throw error;
  }
};

// Función para activar la cuenta de un usuario
export const activateUser = async (activationCode) => {
  try {
    const response = await axios.get(
      `/api/v1/users/activation?code=${activationCode}`
    );
    return response.data;
  } catch (error) {
    console.error("Error activating user:", error);
    throw error;
  }
};

// Función para crear un nuevo viaje
export const createTrip = async (tripData) => {
  try {
    const response = await axios.post("/api/v1/trips/createTrip", tripData);
    return response.data;
  } catch (error) {
    console.error("Error creating trip:", error);
    throw error;
  }
};

// Función para subir una nueva imagen para un viaje específico
export const uploadTripImage = async (tripId, imageFile) => {
  try {
    const formData = new FormData();
    formData.append("tripImage", imageFile);

    const response = await axios.post(
      `/api/v1/trips/updateTripImage/${tripId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error uploading trip image:", error);
    throw error;
  }
};

// Función para eliminar un viaje por ID
export const deleteTripById = async (tripId) => {
  try {
    const response = await axios.delete(`/api/v1/trips/deleteTrip/${tripId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting trip by ID:", error);
    throw error;
  }
};

// Función para obtener detalles de un viaje por ID
export const getTripById = async (tripId) => {
  try {
    const response = await axios.get(`/api/v1/trips/getTripById/${tripId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting trip by ID:", error);
    throw error;
  }
};

// Función para obtener todos los viajes
export const getAllTrips = async () => {
  try {
    const response = await axios.get("/api/v1/trips/getAllTrips");
    return response.data;
  } catch (error) {
    console.error("Error getting all trips:", error);
    throw error;
  }
};

// Función para obtener viajes filtrados por categoría y ciudad
export const getFilteredTrips = async (category, city) => {
  try {
    const response = await axios.get(
      `/api/v1/trips/getFilteredTrips?category=${category}&city=${city}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting filtered trips:", error);
    throw error;
  }
};

// Función para obtener viajes de un usuario por nombre de usuario
export const getTripsByUserName = async (userName) => {
  try {
    const response = await axios.get(
      `/api/v1/trips/getTripsByUserName/${userName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting trips by user name:", error);
    throw error;
  }
};

// Función para crear un nuevo comentario en un viaje
export const createComment = async (tripId, commentData) => {
  try {
    const response = await axios.post(
      `/api/v1/comments/createComment/${tripId}`,
      commentData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};

// Función para obtener comentarios de un viaje por ID
export const getCommentsByTripId = async (tripId) => {
  try {
    const response = await axios.get(
      `/api/v1/comments/getCommentsByTripId/${tripId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting comments by trip ID:", error);
    throw error;
  }
};

// Función para crear un nuevo voto en un viaje
export const createVote = async (tripId, voteData) => {
  try {
    const response = await axios.post(
      `/api/v1/votes/createVote/${tripId}`,
      voteData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating vote:", error);
    throw error;
  }
};

// Función para obtener votos de un viaje por ID
export const getVotesByTripId = async (tripId) => {
  try {
    const response = await axios.get(
      `/api/v1/votes/getVotesByTripId/${tripId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting votes by trip ID:", error);
    throw error;
  }
};

export default {
  registerUser,
  loginUser,
  updateProfile,
  uploadProfileImage,
  getUserById,
  activateUser,
  createTrip,
  uploadTripImage,
  deleteTripById,
  getTripById,
  getAllTrips,
  getFilteredTrips,
  getTripsByUserName,
  createComment,
  getCommentsByTripId,
  createVote,
  getVotesByTripId,
};
