// src/authApi/api.js

// export const API_BASE_URL = "https://app.smigc.in/api/auth";

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


  
  // // --- Admin Specific Endpoints ---
  // ADMIN_LOGIN: `${API_ROOT}/admin/login`, // Admin login
  // ADMIN_GET_PENDING_USERS: `${API_ROOT}/admin/pending-users`, // Get users awaiting approval
  // ADMIN_APPROVE_USER: `${API_ROOT}/admin/approve-user`, // Approve a user
  // ADMIN_REJECT_USER: `${API_ROOT}/admin/reject-user`, // Reject a user

  // // You can add more admin endpoints here if needed
  // ADMIN_GET_ALL_USERS: `${API_ROOT}/admin/users`, // Example: Get all users (approved, pending, rejected)
  // ADMIN_GET_ALL_ACCOUNTS: `${API_ROOT}/admin/getAllAccounts`, // Example: Get all bank accounts (admin view)
  // ADMIN_UPDATE_ACCOUNT: `${API_ROOT}/admin/getAllAccounts`, // Example: Update bank account (admin view)
  // ADMIN_DELETE_ACCOUNT: `${API_ROOT}/admin/deleteAccount`, // Example: Delete bank account (admin view)
  // ADMIN_GET_ALL_WITHDRAW_REQUESTS: `${API_ROOT}/admin/getAllWithdrawRequests`, // Example: Get all withdraw requests
  // ADMIN_UPDATE_WITHDRAW_REQUEST_STATUS: `${API_ROOT}/admin/update`, // Example: Update withdraw request status
  // ADMIN_GET_ALL_MESSAGES: `${API_ROOT}/admin/messages`, // Example: Get all contact messages


 



};