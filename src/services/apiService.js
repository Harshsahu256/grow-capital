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


export const getUserPositions = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(

      (API_ENDPOINT.GET_ACCOUNTS), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.positions || [];
  } catch (error) {
    console.error("Error fetching user positions:", error.response?.data || error.message);
    return [];
  }
};

// ✅ Upload Single File (User)
export const uploadSingleFile = async (file) => {
  const token = localStorage.getItem("token");

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(`${API_ENDPOINT.UPLOAD_SINGLE_FILE}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in uploadSingleFile:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Get User Total Amount
export const getMyTotalAmount = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_ENDPOINT.USER_TOTAL_AMOUNT}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // yaha message + userId + fullName + totalAmount milega
  } catch (error) {
    console.error("Error fetching user total amount:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Create Withdraw Request
export const createWithdrawRequest = async (data) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      API_ENDPOINT.CREATE_WITHDRAW,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating withdraw request:", error.response?.data || error.message);
    throw error;
  }
};



// ✅ Get User Transaction History
export const getUserTransactionHistory = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(API_ENDPOINT.USER_TRANSACTION_HISTORY, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user transaction history:",
      error.response?.data || error.message
    );
    throw error;
  }
};


// ✅ Get User Deposits
export const getUserDeposits = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(API_ENDPOINT.MY_DEPOSITS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // yaha deposits ki array milegi
  } catch (error) {
    console.error("Error fetching user deposits:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Send Contact Message
export const sendContactMessage = async (data) => {
  try {
    const response = await axios.post(
      API_ENDPOINT.MESSAGE,  // Your backend endpoint
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error sending contact message:", error.response?.data || error.message);
    throw error;
  }
};



export const getUserProfile = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(API_ENDPOINT.USER_PROFILE, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data; // <-- notice the .data here
  } catch (error) {
    console.error("Error fetching user profile:", error.response?.data || error.message);
    throw error;
  }
};
