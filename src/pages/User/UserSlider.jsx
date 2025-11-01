import React from "react";
import { Carousel } from "react-bootstrap";

// ✅ Corrected import paths
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const UserSlider = () => {
  return (
    <Carousel fade interval={2500} indicators={false} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={user1}
          alt="First slide"
          style={{ height: "480px", objectFit: "cover" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={user2}
          alt="Second slide"
          style={{ height: "480px", objectFit: "cover" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={user3}
          alt="Third slide"
          style={{ height: "480px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default UserSlider;
