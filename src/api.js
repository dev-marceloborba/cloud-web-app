import axios from "axios";

const api = axios.create({
  baseURL: "https://zenocloudweb.azurewebsites.net/",
});

export default api;
