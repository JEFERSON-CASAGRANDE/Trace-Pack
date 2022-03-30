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

export const postLogin = (data) => {
  try {
    const response = axios.post(`${apiUrl}/login`, data);
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

export const createPoints = (data) => {
  try {
    const response = axios.post(`${apiUrl}/cadastro-ponto`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const createPolygons = (data) => {
  try {
    const response = axios.post(`${apiUrl}/cadastro-poligono`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
