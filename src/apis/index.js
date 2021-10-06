import axios from "axios";
import getToken from "utils/getToken";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "x-auth-token": getToken(),
    "Content-type": "application/json; charset=utf-8",
  },
});

export default instance;
