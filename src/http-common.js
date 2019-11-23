import axios from "axios";
 
export default axios.create({
  withCredentials: true,
  baseURL: "",
  headers: {
    "Content-type": "application/x-www-form-urlencoded",    
   }
});