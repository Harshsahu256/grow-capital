import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ReferModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    referralCode: "GC195989",
    referralTo: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Referral Submitted:", formData);
    alert("Referral Submitted Successfully!");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Refer & Earn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
          1.   Stock Market Investing by Grow Capital referral program is for users who have already
          invested through    Stock Market Investing by Grow Capital. <br />
          * Just complete the form to refer a friend. <br />
          * After the referral, your 20% sharing will be reduced to 10%. <br />
          * Once your friend starts working with us, your payout percentage will
          change. <br />
          * The only profit that will be charged is 10%.
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="referralCode"
              value={formData.referralCode}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Referral To*"
              name="referralTo"
              value={formData.referralTo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Mobile*"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="E-mail Id*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary">
              SUBMIT
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReferModal;
