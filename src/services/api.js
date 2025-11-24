// src/authApi/api.js

export const API_BASE_URL = "https://app.smigc.in/api/auth";

// export const API_BASE_URL = "http://localhost:5000/api/auth";


// export const API_ENDPOINT = {
//   USER_REGISTER: `${API_BASE_URL}/register`,
//   USER_LOGIN: `${API_BASE_URL}/login`,
//    USER_PROFILE: `${API_BASE_URL}/profile`,  // <-- yaha add karo
  
//     GET_BANK_ACCOUNTS: `${API_BASE_URL}/bankAccounts`, // ✅ New endpoint added
//       GET_ACCOUNTS:`${API_BASE_URL}/positions/user`,

//        // ✅ New endpoint for file upload
//   UPLOAD_SINGLE_FILE: `${API_BASE_URL}/single`,

//     // ✅ New endpoint for total amount
//   USER_TOTAL_AMOUNT: `${API_BASE_URL}/my-total-amount`,

//    // ✅ NEW withdraw request API
//   CREATE_WITHDRAW: `${API_BASE_URL}/create`,


  
//   // ✅ New endpoint: User transaction history
// USER_TRANSACTION_HISTORY: `${API_BASE_URL}/transactions`,

//   MY_DEPOSITS: `${API_BASE_URL}/my-deposits`,
// MESSAGE: `${API_BASE_URL}/submit`,
// };



// src/services/api.js

// 🔴 ROOT URL for your backend API
export const API_ROOT = "http://localhost:5000/api";


// export const API_ROOT = "https://app.smigc.in/api";


// 🔴 Centralized API Endpoints
export const API_ENDPOINT = {
  // --- User Authentication & Profile ---

// --- Public / Contact ---
  GET_CONTACT: `${API_ROOT}/admin/contact`,


  USER_REGISTER: `${API_ROOT}/auth/register`,
  USER_LOGIN: `${API_ROOT}/auth/login`,
  USER_PROFILE: `${API_ROOT}/auth/profile`, // User's own profile

  // --- User Specific Data ---
  GET_BANK_ACCOUNTS: `${API_ROOT}/auth/bankAccounts`, // User's bank accounts
  GET_USER_POSITIONS: `${API_ROOT}/auth/positions/user`, // User's trading positions
  USER_TOTAL_AMOUNT: `${API_ROOT}/auth/my-total-amount`, // User's total amount/balance
  USER_TRANSACTION_HISTORY: `${API_ROOT}/auth/transactions`, // User's transaction history
  MY_DEPOSITS: `${API_ROOT}/auth/my-deposits`, // User's deposit history

  // --- User Actions ---
  UPLOAD_SINGLE_FILE: `${API_ROOT}/auth/single`, // User file upload
  CREATE_WITHDRAW: `${API_ROOT}/auth/create`, // User creates withdraw request
  SUBMIT_MESSAGE: `${API_ROOT}/auth/submit`, // User sends contact message

};