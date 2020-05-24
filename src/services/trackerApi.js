import axios from 'axios';
import { AsyncStorage } from 'react-native';

const trackerApi = axios.create({
  baseURL: 'http://192.168.0.16:3000',
});

trackerApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default trackerApi;
