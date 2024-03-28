import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/';

if (!apiUrl) {
  throw new Error('URL is not defined');
}
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

const token = localStorage.getItem('token');
if (token) {
  setAuthHeader(token);
}

export const register = async (
  name: string,
  surname: string,
  phone: number,
  email: string,
  password: string,
  language: string
) => {
  try {
    const response = await axios.post(`${apiUrl}/users/signup`, {
      name,
      surname,
      phone,
      email,
      password,
      language,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
