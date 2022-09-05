import axios from "axios";
import { getToken, removeToken } from "../helpers/authHelper";
import { authPaths } from "../routes/path";
// import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_BASE_URL;

const client = axios.create({ baseURL: `${API_URL}` });

export const Api = async ({ ...options }) => {
  // const navigate = useNavigate();
  const token = getToken();
  client.defaults.headers.common.Authorization = `jwt ${token}`;

  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    console.log("FROM ME", error.response.status);
    if (error.response.status == 401) {
      window.location.replace("/auth/login");
      // console.log("FROM ME", error.response.status);
      removeToken();
    }
    return error;
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
