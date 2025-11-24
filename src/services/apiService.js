// // src/Services/apiService.js

// import axios from "axios";
// import { API_ENDPOINT } from "./api";

// export const registerUser = async (formData) => {
//   try {
//     const response = await axios.post(API_ENDPOINT.USER_REGISTER, formData, {
//       headers: { "Content-Type": "application/json" }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error in registerUser:", error.response?.data || error.message);
//     throw error;
//   }
// };



// export const loginUser = async (formData) => {
//   try {
//     const response = await axios.post(API_ENDPOINT.USER_LOGIN, formData, {
//       headers: { "Content-Type": "application/json" }
//     });
//     const token = response.data.token;
//     if (token) {
//       localStorage.setItem("token", token);
//     }
//     return response.data;
//   } catch (error) {
//     console.error("Error in loginUser:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // ✅ Get All Bank Accounts
// export const getAllBankAccounts = async () => {
//   try {
//     const response = await axios.get(API_ENDPOINT.GET_BANK_ACCOUNTS);
//     return response.data;
//   } catch (error) {
//     console.error("Error in getAllBankAccounts:", error.response?.data || error.message);
//     throw error;
//   }
// };


// export const getUserPositions = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await axios.get(

//       (API_ENDPOINT.GET_ACCOUNTS), {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data.positions || [];
//   } catch (error) {
//     console.error("Error fetching user positions:", error.response?.data || error.message);
//     return [];
//   }
// };

// // ✅ Upload Single File (User)
// export const uploadSingleFile = async (file) => {
//   const token = localStorage.getItem("token");

//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await axios.post(`${API_ENDPOINT.UPLOAD_SINGLE_FILE}`, formData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data"
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error in uploadSingleFile:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // ✅ Get User Total Amount
// export const getMyTotalAmount = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await axios.get(`${API_ENDPOINT.USER_TOTAL_AMOUNT}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data; // yaha message + userId + fullName + totalAmount milega
//   } catch (error) {
//     console.error("Error fetching user total amount:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // ✅ Create Withdraw Request
// export const createWithdrawRequest = async (data) => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await axios.post(
//       API_ENDPOINT.CREATE_WITHDRAW,
//       data,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error creating withdraw request:", error.response?.data || error.message);
//     throw error;
//   }
// };



// // ✅ Get User Transaction History
// export const getUserTransactionHistory = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await axios.get(API_ENDPOINT.USER_TRANSACTION_HISTORY, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error fetching user transaction history:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };


// // ✅ Get User Deposits
// export const getUserDeposits = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await axios.get(API_ENDPOINT.MY_DEPOSITS, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data; // yaha deposits ki array milegi
//   } catch (error) {
//     console.error("Error fetching user deposits:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // ✅ Send Contact Message
// export const sendContactMessage = async (data) => {
//   try {
//     const response = await axios.post(
//       API_ENDPOINT.MESSAGE,  // Your backend endpoint
//       data,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error sending contact message:", error.response?.data || error.message);
//     throw error;
//   }
// };



// export const getUserProfile = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await axios.get(API_ENDPOINT.USER_PROFILE, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data.data; // <-- notice the .data here
//   } catch (error) {
//     console.error("Error fetching user profile:", error.response?.data || error.message);
//     throw error;
//   }
// };


// src/services/apiService.js

import axios from "axios";
import { API_ROOT, API_ENDPOINT } from "./api"; // Import from your api.js

// Create an Axios instance
const API = axios.create({
  baseURL: API_ROOT, // All requests will start with http://localhost:5000/api
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔴 Axios Interceptor to dynamically add the Authorization token
API.interceptors.request.use(
  (config) => {
    // Check for user token
    const userToken = localStorage.getItem("token");
    // Check for admin token (if admin stores it separately)
    const adminData = JSON.parse(localStorage.getItem("admin"));
    const adminToken = adminData ? adminData.token : null;

    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    } else if (adminToken) { // If no user token, check for admin token
      config.headers.Authorization = `Bearer ${adminToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// -------------------------------------------------------------------
// ✅ User Authentication & Registration
// -------------------------------------------------------------------

export const registerUser = async (formData) => {
  // `formData` is expected to be an object: { fullName, email, password, ... }
  try {
    const response = await API.post(API_ENDPOINT.USER_REGISTER, formData);
    return response.data;
  } catch (error) {
    console.error("Error in registerUser:", error.response?.data || error.message);
    throw error;
  }
};


// export const loginUser = async (formData) => {
//   try {
//     const payload = {
//       code: formData.code,        // IMPORTANT
//       password: formData.password // IMPORTANT
//     };

//     const response = await API.post(API_ENDPOINT.USER_LOGIN, payload);
//     return response.data;
//   } catch (error) {
//     console.error("Error in loginUser:", error.response?.data || error.message);
//     throw error;
//   }
// };

export const loginUser = async (formData) => {
  try {
    const payload = {
      code: formData.code,       // <-- Only code (Login ID)
      password: formData.password
    };

    const response = await API.post(API_ENDPOINT.USER_LOGIN, payload);
    return response.data;

  } catch (error) {
    console.error("Error in loginUser:", error.response?.data || error.message);
    throw error;
  }
};



export const getUserProfile = async () => {
  try {
    // ✅ Token from localStorage
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User not logged in");

    // ✅ API call with Authorization header
    const response = await API.get(API_ENDPOINT.USER_PROFILE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data; // backend se profile data
  } catch (error) {
    console.error("Error fetching user profile:", error.response?.data || error.message);
    throw error;
  }
};


export const getAllBankAccounts = async () => {
  try {
    const response = await API.get(API_ENDPOINT.GET_BANK_ACCOUNTS);
    return response.data;
  } catch (error) {
    console.error("Error in getAllBankAccounts:", error.response?.data || error.message);
    throw error;
  }
};


export const getUserPositions = async () => {
  try {
    // ✅ Token from localStorage
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User not logged in");

    // ✅ API call with Authorization header
    const response = await API.get(API_ENDPOINT.GET_USER_POSITIONS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.positions || []; // backend se positions array
  } catch (error) {
    console.error("Error fetching user positions:", error.response?.data || error.message);
    throw error;
  }
};


export const uploadSingleFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file); // 'file' is the field name your backend expects

    const response = await API.post(API_ENDPOINT.UPLOAD_SINGLE_FILE, formData, {
      headers: {
        "Content-Type": "multipart/form-data" // Crucial for file uploads
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in uploadSingleFile:", error.response?.data || error.message);
    throw error;
  }
};

export const getMyTotalAmount = async () => {
  try {
    const response = await API.get(API_ENDPOINT.USER_TOTAL_AMOUNT);
    return response.data;
  } catch (error) {
    console.error("Error fetching user total amount:", error.response?.data || error.message);
    throw error;
  }
};

export const createWithdrawRequest = async (data) => {
  try {
    const response = await API.post(API_ENDPOINT.CREATE_WITHDRAW, data);
    return response.data;
  } catch (error) {
    console.error("Error creating withdraw request:", error.response?.data || error.message);
    throw error;
  }
};

export const getUserTransactionHistory = async () => {
  try {
    const response = await API.get(API_ENDPOINT.USER_TRANSACTION_HISTORY);
    return response.data;
  } catch (error) {
    console.error("Error fetching user transaction history:", error.response?.data || error.message);
    throw error;
  }
};

export const getUserDeposits = async () => {
  try {
    const response = await API.get(API_ENDPOINT.MY_DEPOSITS);
    return response.data;
  } catch (error) {
    console.error("Error fetching user deposits:", error.response?.data || error.message);
    throw error;
  }
};

export const sendContactMessage = async (data) => {
  try {
    const response = await API.post(API_ENDPOINT.SUBMIT_MESSAGE, data);
    return response.data;
  } catch (error) {
    console.error("Error sending contact message:", error.response?.data || error.message);
    throw error;
  }
};

// 🔹 Get Contact Details (public)
export const getContactDetails = async () => {
  try {
    const response = await axios.get(API_ENDPOINT.GET_CONTACT);
    return response.data; // Returns { address, phone, email }
  } catch (error) {
    console.error("Error fetching contact details:", error.response?.data || error.message);
    throw error;
  }
};
