import axios from "axios";

export const getClient = () => {
  return axios.create({
    baseURL: "http://localhost3000",
  });
};
//talking to the backend
