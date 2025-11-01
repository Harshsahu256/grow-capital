// src/Services/apiService.js

import axios from "axios";
import { API_ENDPOINT } from "./api";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(API_ENDPOINT.USER_REGISTER, formData, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    console.error("Error in registerUser:", error.response?.data || error.message);
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(API_ENDPOINT.USER_LOGIN, formData, {
      headers: { "Content-Type": "application/json" }
    });
    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
    }
    return response.data;
  } catch (error) {
    console.error("Error in loginUser:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Get All Bank Accounts
export const getAllBankAccounts = async () => {
  try {
    const response = await axios.get(API_ENDPOINT.GET_BANK_ACCOUNTS);
    return response.data;
  } catch (error) {
    console.error("Error in getAllBankAccounts:", error.response?.data || error.message);
    throw error;
  }
};

