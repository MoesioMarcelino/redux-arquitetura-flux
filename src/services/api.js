import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server-json-api.herokuapp.com',
});

export default api;
