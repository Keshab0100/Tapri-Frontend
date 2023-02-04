import axios from "axios";
const url = "https://tapri-backend.onrender.com";

export const getProduct = async () => {
  try {
    return await axios.get(`${url}/getProducts`);
  } catch (err) {
    console.log("error data not found", err);
  }
};

export const authSign = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (err) {
    console.log("error while signing in", err);
  }
};

export const authLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (err) {
    console.log("error while logging in", err);
  }
};

export const getOneProduct = async(product)=>{
  try {
    return await axios.get(`${url}/getProduct/${product}`);
  } catch (error) {
    console.log(error)
  }
}

export const addOrder = async (data) => {
  try {
    return await axios.post(`${url}/addOrder`, data)
  } catch (error) {
    console.log(error)
  }
}

export const getOrder = async (data) => {
  try {
    return await axios.post(`${url}/getOrder`, data)
  } catch (error) {
    console.log(error)
  }
}