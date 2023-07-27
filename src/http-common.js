import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8808/api",
  headers: {
    "Content-type": "application/json"
  }
});