import React from "react";
import { Button } from "react-bootstrap";
import GoogleMap from "../components/GoogleMap/GoogleMap";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Button
      variant="success"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Button>
  );
};

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-method">
          <div className="address-block">
            <p>
              For more info and bookings, you can contact us by email <br />
              or with the booking platforms at the bottom of the page.
            </p>
            <br />
            <ButtonMailto
              label="Send an email"
              mailto="mailto:arqjgsv@gmail.com"
            />
          </div>
          <div className="address-block">
            <p>
              Cerrada de Reforma 119, 
              <br />
              San Ángel, Ciudad de México,
              <br />
               01040 México
              <br />
              You can also book us by phone at: <br />
              <span>+52 1 5552483330 </span>
            </p>
          </div>
        </div>
        <GoogleMap />
      </div>
      <section className="bottom-shape">
        <div className="custom-shape-divider-bottom-1647626508">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Contact;
