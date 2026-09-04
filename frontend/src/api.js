import axios from "axios";

const API = axios.create({
    baseURL: "https://authentication-system-frontend-lfcj.onrender.com"
});

export default API;