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
          <div>
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
          <div>
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
    </div>
  );
};

export default Contact;
