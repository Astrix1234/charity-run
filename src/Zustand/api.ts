import axios from 'axios';

export interface UserData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  language: string;
  raceParticipants?: raceParticipantUserData[] | null;
}

export interface raceParticipantUserData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  language: string;
  shirt: string;
  shirtGender: string;
}

export interface UserUpdateData {
  name?: string;
  surname?: string;
  phone?: number;
  language?: string;
  password?: string;
}

interface AxiosError extends Error {
  response?: {
    data: unknown;
    status: number;
    headers: unknown;
  };
}

const apiUrl = 'http://localhost:3000/api/';

axios.defaults.withCredentials = true;

export const register = async (userData: UserData) => {
  try {
    axios.defaults.withCredentials = false;
    const response = await axios.post(`${apiUrl}/users/signup`, userData);
    axios.defaults.withCredentials = true;

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error('Error registering user:', err);
    console.error('Error response:', err.response);
    throw err;
  }
};

export const login = async (email: string, password: string) => {
  try {
    axios.defaults.withCredentials = false;
    const response = await axios.post(`${apiUrl}/users/login`, {
      email,
      password,
    });
    axios.defaults.withCredentials = true;
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users/logout`);
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users/current`);
    return response.data;
  } catch (error) {
    console.error('Error getting current user:', error);
    throw error;
  }
};

export const updateUserDetails = async (userDetails: UserUpdateData) => {
  try {
    const response = await axios.patch(`${apiUrl}/users/`, userDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating user details:', error);
    throw error;
  }
};

export const userParticipation = async (userData: raceParticipantUserData) => {
  try {
    const response = await axios.post(`${apiUrl}/users/participate`, userData);
    return response.data;
  } catch (error) {
    console.error('Error with user participation:', error);
    throw error;
  }
};

export const userAvatar = async (avatar: File) => {
  const formData = new FormData();
  formData.append('avatar', avatar);

  try {
    const response = await axios.put(`${apiUrl}/users/avatars`, formData);
    return response.data;
  } catch (error) {
    console.error('Error updating user avatar:', error);
    throw error;
  }
};

export const verificationEmail = async (email: string) => {
  try {
    const response = await axios.post(`${apiUrl}/users/verify`, { email });
    return response.data;
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
};

export const resetPassword = async (email: string) => {
  try {
    const response = await axios.post(`${apiUrl}/users/reset-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

export const verifyAccount = async (verificationToken: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}/users/verify/${verificationToken}`
    );
    return response.data;
  } catch (error) {
    console.error('Error verifying account:', error);
    throw error;
  }
};
