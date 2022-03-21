import axios from "axios";

const api = axios.create({
  baseURL: "https://zenocloudapi.azurewebsites.net/",
});

export default api;
