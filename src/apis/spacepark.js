import axios from "axios";

const token = JSON.parse(localStorage.getItem("userInfo"));
export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    Authorization: `Bearer ${token.token}`,
  },
});
