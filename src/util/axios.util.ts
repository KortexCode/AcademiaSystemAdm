import axios from "axios";

const URL = "http://localhost:3000/api/v1/";

export const axiosInstance = axios.create({
  baseURL: URL,
});
