// src/authApi/api.js

// export const API_BASE_URL = "https://app.smigc.in/api/auth";

export const API_BASE_URL = "http://localhost:5000/api/auth";


export const API_ENDPOINT = {
  USER_REGISTER: `${API_BASE_URL}/register`,
  USER_LOGIN: `${API_BASE_URL}/login`,
    GET_BANK_ACCOUNTS: `${API_BASE_URL}/bankAccounts`, // ✅ New endpoint added
      GET_ACCOUNTS:`${API_BASE_URL}/positions/user`,

       // ✅ New endpoint for file upload
  UPLOAD_SINGLE_FILE: `${API_BASE_URL}/single`,

    // ✅ New endpoint for total amount
  USER_TOTAL_AMOUNT: `${API_BASE_URL}/my-total-amount`,

   // ✅ NEW withdraw request API
  CREATE_WITHDRAW: `${API_BASE_URL}/create`,


  
  // ✅ New endpoint: User transaction history
USER_TRANSACTION_HISTORY: `${API_BASE_URL}/transactions`,

  MY_DEPOSITS: `${API_BASE_URL}/my-deposits`,
MESSAGE: `${API_BASE_URL}/submit`,
};
