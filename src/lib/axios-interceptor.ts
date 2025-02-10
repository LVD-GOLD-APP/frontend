/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: TIMEOUT,
});

const onRequestSuccess = (config: any) => {
  return config;
};
const onResponseSuccess = (response: AxiosResponse) => {
  return response.data
};

const onResponseError = (err: any) => {
  const status = err.status || (err.response ? err.response.status : 0);
  if (status === 403 || status === 401) {
    // onUnauthenticated();
  }
  return Promise.reject(err);
};

instance.interceptors.request.use(onRequestSuccess);
instance.interceptors.response.use(onResponseSuccess, onResponseError);

export default instance;