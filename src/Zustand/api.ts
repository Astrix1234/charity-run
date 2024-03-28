import axios from 'axios';

interface UserData {
  name: string;
  surname: string;
  phone: number;
  email: string;
  password: string;
  language: string;
}

interface UserUpdateData {
  name?: string;
  surname?: string;
  phone?: number;
  language?: string;
}

interface UserParticipationData {
  name: string;
  surname: string;
  phone: number;
  email: string;
  language: string;
  shoe?: number;
  shirt: string;
  shirtGender: string;
}

const apiUrl = 'http://localhost:3000/api/';

if (!apiUrl) {
  throw new Error('URL is not defined');
}
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

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      try {
        const accessToken = await refreshToken();
        return axios({
          ...error.config,
          headers: {
            ...error.config.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } catch (refreshError) {
        console.error(refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

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
    localStorage.setItem('token', response.data.token);
    if (response.data.refreshToken) {
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login`, {
      email,
      password,
    });
    localStorage.setItem('token', response.data.token);
    if (response.data.refreshToken) {
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
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
    localStorage.removeItem('refreshToken');
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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error updating user details:',
        error.response ? error.response.data : error
      );
    } else {
      console.error('Error updating user details:', error);
    }
    throw error;
  }
};

export const userParticipation = async (userData: UserParticipationData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/users/participate`,
      userData,
      getConfig()
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error with user participation:',
        error.response ? error.response.data : error
      );
    } else {
      console.error('Error with user participation:', error);
    }
    throw error;
  }
};

export const getUserParticipation = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/users/participation`,
      getConfig()
    );
    return response.data;
  } catch (error) {
    console.error('Error getting user participation:', error);
    throw error;
  }
};

export const userAvatar = async (avatar: File) => {
  try {
    const token = getToken();
    const formData = new FormData();
    formData.append('avatar', avatar);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    const response = await axios.put(
      `${apiUrl}/users/avatars`,
      formData,
      config
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error updating user avatar:',
        error.response ? error.response.data : error
      );
    } else {
      console.error('Error updating user avatar:', error);
    }
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token found in localStorage');
    }
    const response = await axios.post(`${apiUrl}/users/refresh-token`, {
      refreshToken,
    });
    localStorage.setItem('token', response.data.accessToken);
    if (response.data.refreshToken) {
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    setAuthHeader(response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

export const verificationEmail = async (email: string) => {
  try {
    const response = await axios.post(`${apiUrl}/users/verify`, {
      email,
    });
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

export const changePassword = async (password: string) => {
  try {
    const response = await axios.patch(
      `${apiUrl}/users/change-password`,
      {
        password,
      },
      getConfig()
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error changing password:', error?.response?.data);
      throw new Error(error.response?.data);
    } else {
      console.error('Error changing password:', error);
      throw new Error('Error changing password');
    }
  }
};

export const verifyAccount = async (verificationToken: string) => {
  try {
    const response = await axios.get(`${apiUrl}/users/verify/`, {
      params: { verificationToken },
    });
    return response.data;
  } catch (error) {
    console.error('Error verifying account:', error);
    throw error;
  }
};
