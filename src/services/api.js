// src/authApi/api.js

export const API_BASE_URL = "http://localhost:5000/api/auth";

export const API_ENDPOINT = {
  USER_REGISTER: `${API_BASE_URL}/register`,
  USER_LOGIN: `${API_BASE_URL}/login`,
    GET_BANK_ACCOUNTS: `${API_BASE_URL}/bankAccounts`, // ✅ New endpoint added

};
