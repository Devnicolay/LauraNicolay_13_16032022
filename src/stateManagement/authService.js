import axios from "axios";

const API_USER_URL = "http://localhost:3001/api/v1/user/profile";
const API_URL = "http://localhost:3001/api/v1/user/login";

// User data
export const getUserData = async (userToken) => {
  const response = await axios.post(
    API_USER_URL,
    {},
    {
      headers: { authorization: "Bearer" + userToken },
    }
  );

  return response.data;
};

// Login user
export const login = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

// Edit user name
export const editUserName = async (userName, userToken) => {
  const response = await axios.put(
    API_USER_URL,
    {
      firstName: userName.firstname,
      lastName: userName.lastname,
    },
    { headers: { authorization: "Bearer" + userToken } }
  );

  return response.data;
};
