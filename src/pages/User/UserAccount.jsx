import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BottomNavbar from "./BottomNavbar";

const UserAccount = () => {
  return (
      <>
    <div className="container py-3" style={{ backgroundColor: "#f7f8fc", minHeight: "100vh" }}>
      <h5 className="fw-bold mb-3">Your Account</h5>

      {/* Trading Balance Card */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body">
          <h6 className="fw-bold text-secondary">Trading Balance</h6>
          <h5 className="fw-bold mt-2">₹19,889</h5>
          <div className="d-flex mt-3 gap-3">
            <button className="btn btn-outline-primary flex-fill">WITHDRAW</button>
            <button className="btn btn-primary flex-fill">ADD FUNDS</button>
          </div>
        </div>
      </div>

      {/* Stock Pledge */}
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body d-flex align-items-center">
              <i className="bi bi-piggy-bank-fill fs-2 text-primary me-3"></i>
              <div>
                <h6 className="fw-bold mb-1">Stock Pledging</h6>
                <p className="small text-muted mb-0">
                  Pledge stocks you hold to increase trading balance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body d-flex align-items-center">
              <i className="bi bi-cash-coin fs-2 text-primary me-3"></i>
              <div>
                <h6 className="fw-bold mb-1">MTF Pledge</h6>
                <p className="small text-muted mb-0">
                  Buy upto 4x stocks at just 0.049% interest per day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Transactions */}
      <button className="btn btn-primary w-100 py-2 mb-4">VIEW TRANSACTION HISTORY</button>

      {/* DASH Section */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body">
          <h6 className="fw-bold text-primary">DASH</h6>
          <p className="small text-muted">
            Reports and Statements Modern back office for investors and traders
          </p>

          <div className="list-group">
            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-file-earmark-text fs-5 text-primary me-3"></i>
              <div>
                <strong>Statement / Ledger</strong>
                <div className="small text-muted">Your Transactions with Grow Capital</div>
              </div>
            </div>

            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-wallet2 fs-5 text-primary me-3"></i>
              <div>
                <strong>Trades and Charges</strong>
                <div className="small text-muted">All your charges in one place</div>
              </div>
            </div>

            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-graph-up fs-5 text-primary me-3"></i>
              <div>
                <strong>Profit and Loss</strong>
                <div className="small text-muted">
                  Analyse profit and loss for your trade
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body">
          <h6 className="fw-bold text-primary">How Can We Help You?</h6>

          <div className="list-group">
            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-send fs-5 text-primary me-3"></i>
              <strong>Contact Us</strong>
            </div>
            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-telephone fs-5 text-primary me-3"></i>
              <strong>Call Us</strong>
            </div>
            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-credit-card fs-5 text-primary me-3"></i>
              <strong>A third item</strong>
            </div>
          </div>
        </div>
      </div>

      {/* About & Logout */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body">
          <div className="list-group">
            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-book fs-5 text-primary me-3"></i>
              <strong>About Us</strong>
            </div>
            <div className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-power fs-5 text-danger me-3"></i>
              <strong>Logout</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center mb-5">
        <h6 className="fw-bold">Join Our Community</h6>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <i className="bi bi-instagram fs-4"></i>
          <i className="bi bi-facebook fs-4"></i>
          <i className="bi bi-youtube fs-4"></i>
          <i className="bi bi-linkedin fs-4"></i>
          <i className="bi bi-twitter-x fs-4"></i>
        </div>
      </div>

      {/* Bottom Navigation */}
      
    </div>
  
    <BottomNavbar/>
    </>
  );
};

export default UserAccount;
