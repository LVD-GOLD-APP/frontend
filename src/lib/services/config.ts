import axios from "axios";

const CMS_URL = "http://localhost:1337/api";

export const api = axios.create({
  baseURL: CMS_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
