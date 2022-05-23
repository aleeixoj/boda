import axios from 'axios';

const api = axios.create({
  baseURL: 'https://boda-api.herokuapp.com',
});

export { api };
