/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { ButtonHeader } from "../Button/Button";
import "./Header.css";
import videoCover from "../../assets/CoverWEB.mp4";

const CoverHeader = () => {
  const [opacity, setOpacity] = React.useState("1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        // let maxScroll = document.body.scrollHeight - window.innerHeight;

        if (currentScrollPos > 0) {
          setOpacity("0");
        } else {
          setOpacity("1");
        }
      };
    }
  }, []);

  return (
    <div onScroll={(e) => scrollFunction(e)} className="garden-container">
      <video className="video-intro" src={videoCover} autoPlay loop muted />
      <div className="header-container">
        <div className="header-text">
          <h1>Garden House</h1>
          <h2 style={{ fontStyle: "italic" }}>
            "An oasis in the old town of San Angel, a magical place for you to
            relax and disconnect during your stay in Mexico City."
          </h2>
          <br />
          <p>What are you waiting for?</p>
          <div className="garden-btns">
            <ButtonHeader
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              linkTo="/contact"
              label={"Contact"}
              variant="success"
            ></ButtonHeader>
            <ButtonHeader
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              linkTo="/rooms"
              label={"Find your room"}
              variant="success"
            ></ButtonHeader>
          </div>
          <span className=" scroll-element" style={{ opacity: `${opacity}` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoverHeader;
