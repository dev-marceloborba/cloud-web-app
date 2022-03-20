import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5040/",
});

export default api;
