import axios from 'axios';

const trackerApi = axios.create({
  baseURL: 'http://192.168.0.12:3000',
});

export default trackerApi;
