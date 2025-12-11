import api from './index';

export const loginUser = (credentials) => {
  return api.post('/users/login', credentials);
};

export const registerUser = (data) => {
  return api.post('/users/register', data);
};