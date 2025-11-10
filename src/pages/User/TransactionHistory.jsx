
// import React, { useEffect, useState } from "react";
// import { getUserTransactionHistory } from "../../services/apiService";

// const TransactionHistory = () => {
//   const [activeTab, setActiveTab] = useState("deposit");
//   const [withdrawList, setWithdrawList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchWithdrawHistory = async () => {
//     setLoading(true);
//     try {
//       const data = await getUserTransactionHistory();
//       setWithdrawList(data.transactions);
//     } catch (error) {
//       console.error("Withdraw fetch failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === "withdraw") {
//       fetchWithdrawHistory();
//     }
//   }, [activeTab]);

//   const getStatusColor = (status) => {
//     return status.toLowerCase() === "pending" ? "#e63946" : "#2a9d8f";
//   };

//   return (
//     <div style={{ padding: "20px", paddingTop: "10px" }}>

//       {/* Heading */}
//       <h2 style={{ marginBottom: "10px", textAlign: "left", fontWeight: "700" }}>
//         Transaction History
//       </h2>

//       {/* Tabs */}
//       <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
//         <button
//           onClick={() => setActiveTab("deposit")}
//           style={activeTab === "deposit" ? activeTabStyle : inactiveTabStyle}
//         >
//           Deposit
//         </button>

//         <button
//           onClick={() => setActiveTab("withdraw")}
//           style={activeTab === "withdraw" ? activeTabStyle : inactiveTabStyle}
//         >
//           Withdraw
//         </button>
//       </div>

//       {/* Deposit View */}
//       {activeTab === "deposit" && (
//         <p style={{ color: "#888", marginLeft: "10px" }}>
//           No deposit history available.
//         </p>
//       )}

//       {/* Withdraw View */}
//       {activeTab === "withdraw" && (
//         <div>
//           {loading ? (
//             <p style={{ marginLeft: "10px" }}>Loading...</p>
//           ) : withdrawList.length === 0 ? (
//             <p style={{ color: "#888", marginLeft: "10px" }}>
//               No withdraw history found.
//             </p>
//           ) : (
//             <div
//               style={{
//                 background: "white",
//                 borderRadius: "12px",
//                 padding: "15px",
//                 border: "1px solid #e1e1e1",
//                 margin: "0 10px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
//               }}
//             >
//               {withdrawList.map((tx, idx) => (
//                 <div
//                   key={tx._id}
//                   style={{
//                     padding: "25px 0",
//                     borderBottom:
//                       idx === withdrawList.length - 1
//                         ? "none"
//                         : "1px solid #f0f0f0",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center"
//                   }}
//                 >
//                   {/* Date */}
//                   <div>
//                     <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Date</p>
//                     <p style={{ margin: 0, fontWeight: 600 }}>{tx.date}</p>
//                   </div>

//                   {/* Amount */}
//                   <div>
//                     <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Amount</p>
//                     <p style={{ margin: 0, fontWeight: 600 }}>₹ {tx.amount}</p>
//                   </div>

//                   {/* Status */}
//                   <div style={{ textAlign: "right" }}>
//                     <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Status</p>
//                     <p
//                       style={{
//                         margin: 0,
//                         fontWeight: 700,
//                         color: getStatusColor(tx.status)
//                       }}
//                     >
//                       {tx.status === "approved"
//                         ? "Successful"
//                         : tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// /* ACTIVE TAB */
// const activeTabStyle = {
//   background: "transparent",
//   border: "none",
//   borderBottom: "3px solid #2563eb",
//   paddingBottom: "6px",
//   cursor: "pointer",
//   fontWeight: 700,
//   fontSize: "16px",
//   transition: "0.2s",
//   color: "#2563eb"
// };

// /* INACTIVE TAB */
// const inactiveTabStyle = {
//   background: "transparent",
//   border: "none",
//   paddingBottom: "6px",
//   cursor: "pointer",
//   color: "#777",
//   fontSize: "16px",
//   transition: "0.2s"
// };

// export default TransactionHistory;


// import React, { useEffect, useState } from "react";
// import {
//   getUserTransactionHistory,
//   getUserDeposits
// } from "../../services/apiService";

// const TransactionHistory = () => {
//   const [activeTab, setActiveTab] = useState("deposit");

//   const [withdrawList, setWithdrawList] = useState([]);
//   const [depositList, setDepositList] = useState([]);

//   const [loading, setLoading] = useState(false);

//   // ✅ Withdraw Fetch
//   const fetchWithdrawHistory = async () => {
//     setLoading(true);
//     try {
//       const data = await getUserTransactionHistory();
//       setWithdrawList(data.transactions);
//     } catch (error) {
//       console.error("Withdraw fetch failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Deposit Fetch
//   const fetchDepositHistory = async () => {
//     setLoading(true);
//     try {
//       const data = await getUserDeposits();
//       setDepositList(data.deposits);
//     } catch (error) {
//       console.error("Deposit fetch failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Tab Switching Logic
//   useEffect(() => {
//     if (activeTab === "withdraw") fetchWithdrawHistory();
//     if (activeTab === "deposit") fetchDepositHistory();
//   }, [activeTab]);

//   const getStatusColor = (status) => {
//     return status.toLowerCase() === "pending" ? "#e63946" : "#2a9d8f";
//   };

//   // ✅ Reusable Transaction Card
//   const renderCard = (list) => (
//     <div
//       style={{
//         background: "white",
//         borderRadius: "12px",
//         padding: "15px",
//         border: "1px solid #e1e1e1",
//         margin: "0 10px",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
//       }}
//     >
//       {list.map((tx, idx) => (
//         <div
//           key={tx._id}
//           style={{
//             padding: "25px 0",
//             borderBottom: idx === list.length - 1 ? "none" : "1px solid #f0f0f0",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center"
//           }}
//         >
//           {/* Date */}
//           <div>
//             <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Date</p>
//             <p style={{ margin: 0, fontWeight: 600 }}>{tx.date}</p>
//           </div>

//           {/* Amount */}
//           <div>
//             <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Amount</p>
//             <p style={{ margin: 0, fontWeight: 600 }}>₹ {tx.amount}</p>
//           </div>

//           {/* Status */}
//           <div style={{ textAlign: "right" }}>
//             <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Status</p>
//             <p
//               style={{
//                 margin: 0,
//                 fontWeight: 700,
//                 color: getStatusColor(tx.status)
//               }}
//             >
//               {tx.status === "approved"
//                 ? "Successful"
//                 : tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div style={{ padding: "20px", paddingTop: "10px" }}>
//       <h2 style={{ marginBottom: "10px", textAlign: "left", fontWeight: "700" }}>
//         Transaction History
//       </h2>

//       {/* Tabs */}
//       <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
//         <button
//           onClick={() => setActiveTab("deposit")}
//           style={activeTab === "deposit" ? activeTabStyle : inactiveTabStyle}
//         >
//           Deposit
//         </button>

//         <button
//           onClick={() => setActiveTab("withdraw")}
//           style={activeTab === "withdraw" ? activeTabStyle : inactiveTabStyle}
//         >
//           Withdraw
//         </button>
//       </div>

//       {/* Deposit View */}
//       {activeTab === "deposit" && (
//         <div>
//           {loading ? (
//             <p style={{ marginLeft: "10px" }}>Loading...</p>
//           ) : depositList.length === 0 ? (
//             <p style={{ color: "#888", marginLeft: "10px" }}>
//               No deposit history found.
//             </p>
//           ) : (
//             renderCard(depositList)
//           )}
//         </div>
//       )}

//       {/* Withdraw View */}
//       {activeTab === "withdraw" && (
//         <div>
//           {loading ? (
//             <p style={{ marginLeft: "10px" }}>Loading...</p>
//           ) : withdrawList.length === 0 ? (
//             <p style={{ color: "#888", marginLeft: "10px" }}>
//               No withdraw history found.
//             </p>
//           ) : (
//             renderCard(withdrawList)
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// /* ACTIVE TAB */
// const activeTabStyle = {
//   background: "transparent",
//   border: "none",
//   borderBottom: "3px solid #2563eb",
//   paddingBottom: "6px",
//   cursor: "pointer",
//   fontWeight: 700,
//   fontSize: "16px",
//   color: "#2563eb"
// };

// /* INACTIVE TAB */
// const inactiveTabStyle = {
//   background: "transparent",
//   border: "none",
//   paddingBottom: "6px",
//   cursor: "pointer",
//   color: "#777",
//   fontSize: "16px"
// };

// export default TransactionHistory;


import React, { useEffect, useState } from "react";
import {
  getUserTransactionHistory,
  getUserDeposits
} from "../../services/apiService";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("deposit");

  const [withdrawList, setWithdrawList] = useState([]);
  const [depositList, setDepositList] = useState([]);

  const [loading, setLoading] = useState(false);

  // ✅ Date formatter (Fix)
  const getDisplayDate = (tx) => {
    const rawDate = tx.date || tx.createdAt;

    if (!rawDate) return "N/A";

    return new Date(rawDate).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  // ✅ Withdraw Fetch
  const fetchWithdrawHistory = async () => {
    setLoading(true);
    try {
      const data = await getUserTransactionHistory();
      setWithdrawList(data.transactions);
    } catch (error) {
      console.error("Withdraw fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Deposit Fetch
  const fetchDepositHistory = async () => {
    setLoading(true);
    try {
      const data = await getUserDeposits();
      setDepositList(data.deposits);
    } catch (error) {
      console.error("Deposit fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Tab Switching Logic
  useEffect(() => {
    if (activeTab === "withdraw") fetchWithdrawHistory();
    if (activeTab === "deposit") fetchDepositHistory();
  }, [activeTab]);

  const getStatusColor = (status) => {
    return status.toLowerCase() === "pending" ? "#e63946" : "#2a9d8f";
  };

  // ✅ Reusable Transaction Card
  const renderCard = (list) => (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "15px",
        border: "1px solid #e1e1e1",
        margin: "0 10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}
    >
      {list.map((tx, idx) => (
        <div
          key={tx._id}
          style={{
            padding: "25px 0",
            borderBottom: idx === list.length - 1 ? "none" : "1px solid #f0f0f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {/* Date */}
          <div>
            <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Date</p>
            <p style={{ margin: 0, fontWeight: 600 }}>{getDisplayDate(tx)}</p>
          </div>

          {/* Amount */}
          <div>
            <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Amount</p>
            <p style={{ margin: 0, fontWeight: 600 }}>₹ {tx.amount}</p>
          </div>

          {/* Status */}
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>Status</p>
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                color: getStatusColor(tx.status)
              }}
            >
              {tx.status === "approved"
                ? "Successful"
                : tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: "20px", paddingTop: "10px" }}>
      <h2 style={{ marginBottom: "10px", textAlign: "left", fontWeight: "700" }}>
        Transaction History
      </h2>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("deposit")}
          style={activeTab === "deposit" ? activeTabStyle : inactiveTabStyle}
        >
          Deposit
        </button>

        <button
          onClick={() => setActiveTab("withdraw")}
          style={activeTab === "withdraw" ? activeTabStyle : inactiveTabStyle}
        >
          Withdraw
        </button>
      </div>

      {/* Deposit View */}
      {activeTab === "deposit" && (
        <div>
          {loading ? (
            <p style={{ marginLeft: "10px" }}>Loading...</p>
          ) : depositList.length === 0 ? (
            <p style={{ color: "#888", marginLeft: "10px" }}>
              No deposit history found.
            </p>
          ) : (
            renderCard(depositList)
          )}
        </div>
      )}

      {/* Withdraw View */}
      {activeTab === "withdraw" && (
        <div>
          {loading ? (
            <p style={{ marginLeft: "10px" }}>Loading...</p>
          ) : withdrawList.length === 0 ? (
            <p style={{ color: "#888", marginLeft: "10px" }}>
              No withdraw history found.
            </p>
          ) : (
            renderCard(withdrawList)
          )}
        </div>
      )}
    </div>
  );
};

/* ACTIVE TAB */
const activeTabStyle = {
  background: "transparent",
  border: "none",
  borderBottom: "3px solid #2563eb",
  paddingBottom: "6px",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "16px",
  color: "#2563eb"
};

/* INACTIVE TAB */
const inactiveTabStyle = {
  background: "transparent",
  border: "none",
  paddingBottom: "6px",
  cursor: "pointer",
  color: "#777",
  fontSize: "16px"
};

export default TransactionHistory;
