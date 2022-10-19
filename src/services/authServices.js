import axios from "axios";

const URL_ROOT = "https://api-ecommerce-ecpw.onrender.com/api/auth";
// const URL_ROOT = "http://localhost:4000/api/auth";
const CONFIG = {
  headers: {
    "auth-token": localStorage.getItem("token"),
  },
};

export const loginService = async (form) => {

  const resp = await axios.post(`${URL_ROOT}/login`, form);

  return resp.data;
  
};

export const signupService = async (form) => {

  const resp = await axios.post(`${URL_ROOT}`, form);

  return resp.data;
  
};

export const verifyingTokenService = async () => {

  const resp = await axios.get(`${URL_ROOT}`, CONFIG);

  return resp.data;
  
};