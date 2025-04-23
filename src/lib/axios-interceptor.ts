/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: TIMEOUT,
});

const onRequestSuccess = (config: any) => {
  config.headers = {
    ...config.headers,
    Cookie: ".AspNetCore.Culture=c%3Den%7Cuic%3Den; __tenant=3a1927cb-a1d7-2e9a-697c-ffa7deb63fc7",
  };
  return config;
};
const onResponseSuccess = (response: AxiosResponse) => {
  return response;
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
