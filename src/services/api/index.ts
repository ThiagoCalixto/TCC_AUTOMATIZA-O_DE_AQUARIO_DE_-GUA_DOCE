import axios from "axios";

const api = axios.create({
  baseURL: "https://tcc-api-aquarium.vercel.app/",
  headers: {
    ['Content-Type']: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
}
});

export default api;
