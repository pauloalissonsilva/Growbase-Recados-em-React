import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-tasks-list.herokuapp.com',
})

export default api;
