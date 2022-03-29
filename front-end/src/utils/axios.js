import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getAllFeatures = () => {
  try {
    const response = axios.get(`${apiUrl}/features`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const createUser = (data) => {
  try {
    const response = axios.post(`${apiUrl}/cadastro-usuario`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
