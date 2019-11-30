import axios from "axios";
 
export default axios.create({
  baseURL: "http://213.149.113.86:8000/api",
});