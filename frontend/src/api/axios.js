import axios from "axios";

const client = axios.create({
  baseURL : "https://wendydjoumessi-backend.onrender.com"
  //baseurl : "https://localhost : 4000"
});

export default client;