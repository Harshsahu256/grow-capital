

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 🟦 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


// 🌐 React Router
import { BrowserRouter } from 'react-router-dom';

// 🔔 Toast Notifications
import { ToastContainer } from 'react-toastify';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

        <App />
        <ToastContainer position="top-right" autoClose={3000} />
     
    </BrowserRouter>
  </React.StrictMode>
);



