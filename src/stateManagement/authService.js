import axios from "axios";

const API_USER_URL = "http://localhost:3001/api/v1/user/profile";
const API_URL = "http://localhost:3001/api/v1/user/login";

/**
 *
 * @param {string} userToken
 * @returns {object} data of user
 */
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

/**
 *
 * @param {object} userData value of inputs (email and password) for login
 * @returns {object} data of user with token
 */
export const login = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

/**
 *
 * @param {object} userName value of inputs (firstname and lastname) for edit name form
 * @param {string} userToken token of user
 * @returns {object} data of user with new firstname and lastname
 */
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
