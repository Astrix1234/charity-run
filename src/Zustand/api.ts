import axios from 'axios';

export interface UserData {
  name: string;
  surname: string;
  email: string;
  password: string;
  language: string;
  raceParticipants?: [];
  avatarURL?: string;
  userId?: string;
  raceID?: string;
}

export interface raceParticipantUserData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  language: string;
  shirt: string;
  km: string;
  shirtGender: ShirtGender;
  agreementStatements: boolean;
}

export type ShirtGender = 'Damska' | 'Męska' | 'Dziecięca';

export interface UserUpdateData {
  name?: string;
  surname?: string;
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

export const apiUrl = 'https://charyty-run-backend.azurewebsites.net/api';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const token = localStorage.getItem('token');
if (token) {
  setAuthHeader(token);
}

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found in localStorage');
  }
  return token;
};

const getConfig = () => {
  const token = getToken();
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const register = async (userData: UserData) => {
  try {
    const response = await axios.post(`${apiUrl}/users/signup`, userData);
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
    const response = await axios.post(`${apiUrl}/users/login`, {
      email,
      password,
    });
    localStorage.setItem('token', response.data.token);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users/logout`, getConfig());
    localStorage.removeItem('token');
    clearAuthHeader();
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users/current`, getConfig());
    return response.data;
  } catch (error) {
    console.error('Error getting current user:', error);
    throw error;
  }
};

export const updateUserDetails = async (userDetails: UserUpdateData) => {
  try {
    const response = await axios.patch(
      `${apiUrl}/users/`,
      userDetails,
      getConfig()
    );
    return response.data;
  } catch (error) {
    console.error('Error updating user details:', error);
    throw error;
  }
};

export const userParticipation = async (
  amount: number,
  participantData: raceParticipantUserData
) => {
  try {
    const response = await axios.post(
      `${apiUrl}/payment/participate`,
      {
        amount,
        participant: participantData,
      },
      getConfig()
    );
    return response.data;
  } catch (error) {
    console.error('Error with user participation:', error);
    throw error;
  }
};

export const getUserParticipation = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/users/participant`,
      getConfig()
    );
    return response.data;
  } catch (error) {
    console.error('Error getting participant:', error);
    throw error;
  }
};

export const userAvatar = async (avatar: File) => {
  const formData = new FormData();
  formData.append('avatar', avatar);

  try {
    const response = await axios.patch(
      `${apiUrl}/users/avatars`,
      formData,
      getConfig()
    );
    return response.data;
  } catch (error) {
    console.error('Error updating user avatar:', error);
    throw error;
  }
};

export const resetPassword = async (email: string) => {
  try {
    const response = await axios.patch(`${apiUrl}/users/reset-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

export const registerForDonation = async (amount: number, email: string) => {
  try {
    const response = await axios.post(`${apiUrl}/payment/donation`, {
      amount,
      email,
    });
    return response.data;
  } catch (error) {
    console.error('Error with user participation:', error);
    throw error;
  }
};
