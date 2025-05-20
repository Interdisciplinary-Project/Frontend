import axios from "axios";
const httpClient = axios.create({
  baseURL: "https://localhost:7087",
  headers: { Authorization: "Bearer FatecMatao" }
})
export { httpClient }