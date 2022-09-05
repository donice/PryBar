import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { setToken } from "../helpers/authHelper";
import { handleApiError } from "../helpers/handleApiError";

const API_URL = import.meta.env.VITE_BASE_URL;

const signup = async (payload:any) => {
  try {
    console.log(payload);
    // const requestPayload = serializers.signup(payload);
    // console.log("Request:", requestPayload);
    const { data } = await axios.post(`${API_URL}/auth/register`, payload);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const SignupUser = () => {
  return useMutation(signup);
};

const verify = async (payload:any) => {
  return await axios.post(`${API_URL}/auth/confirm-email`, payload);
};
export const verifyEmail = () => {
  return useMutation(verify);
};

const login = async (payload:any) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, payload);
    setToken(data.access);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
export const LoginUser = () => {
  return useMutation(login);
};

const forgotPassword = async (payload:any) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/forgot_password/`,
      payload
    );
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const ForgotPassword = () => {
  return useMutation(forgotPassword);
};

const resetPassword = async (payload:any) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/user/reset_password/`,
      payload
    );
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const ResetPassword = () => {
  return useMutation(resetPassword);
};

// const serializers = {
//   signup(payload:any) {
//     console.log(payload);
//     return {
//       email: payload?.email,
//       phone: payload?.phoneNumber,
//       firstName: payload?.firstName,
//       lastName: payload?.lastName,
//       re_password: payload?.confirmPassword,
//       password: payload?.password,
//       callbackUrl: import.meta.env.VITE_CALLBACK_URL,
//       dateOfBirth: "2022-07-22",
//     };
//   },
// };

