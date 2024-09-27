import axios from "axios";

const axiosInstance = axios.create({
  // local instence of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2024-5512b/us-central1/api",


  // deployed version of amazon server on render
baseURL:"https://amazon-api-5r28.onrender.com",
});

export { axiosInstance };
