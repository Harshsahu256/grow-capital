import React, { useEffect, useState, useRef } from "react";
import { createWithdrawRequest } from "../../services/apiService";

const WithdrawCard = ({ onClose }) => {
  const dateRef = useRef(null);

  const [formData, setFormData] = useState({
    date: "",
    userName: "",
    accountNumber: "",
    ifscCode: "",
    amount: ""
  });

  // ✅ Auto-fill user details
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setFormData(prev => ({
        ...prev,
        userName: user.fullName || "",
        accountNumber: user.accountNumber || "",
        ifscCode: user.ifscCode || ""
      }));
    }
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit Handler
  const submitHandler = async () => {
    if (!formData.date || !formData.amount) {
      alert("Date aur Amount required hai!");
      return;
    }

    try {
      const res = await createWithdrawRequest({
        date: formData.date,
        userName: formData.userName,
        accountNumber: formData.accountNumber,
        ifscCode: formData.ifscCode,
        amount: formData.amount
      });

      alert(res.message);
      onClose();
    } catch (error) {
      console.log("API ERROR ❌", error);
      alert("Something went wrong!");
    }
  };

  const openCalendar = () => {
    dateRef.current.showPicker();
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h5 className="fw-bold mb-0">Withdraw</h5>
        <button onClick={onClose} style={styles.closeIcon}>&times;</button>
      </div>

      <div style={styles.inputWrapper}>
        <input
          ref={dateRef}
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={styles.input}
        />
        <span style={styles.calendarIcon} onClick={openCalendar}>📅</span>
      </div>

      <input type="text" value={formData.userName} readOnly style={styles.input} />

      <input type="text" value={formData.accountNumber} readOnly style={styles.input} />

      <input type="text" value={formData.ifscCode} readOnly style={styles.input} />

      <input
        type="number"
        name="amount"
        placeholder="Enter Amount"
        value={formData.amount}
        onChange={handleChange}
        style={styles.input}
      />

      <button style={styles.btn} onClick={submitHandler}>
        WITHDRAW REQUEST
      </button>
    </div>
  );
};

const styles = {
  card: {
    width: "100%",
    maxWidth: "330px",
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    position: "relative"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px"
  },
  closeIcon: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "Pointer",
    color: "#555"
  },
  inputWrapper: {
    position: "relative",
    width: "100%"
  },
  calendarIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "18px",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    margin: "6px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },
  btn: {
    width: "100%",
    padding: "10px",
    background: "#0984e3",
    color: "white",
    border: "None",
    borderRadius: "6px",
    marginTop: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default WithdrawCard;
