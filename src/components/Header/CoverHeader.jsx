/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import { ButtonHeader } from "../Button/Button";
import "./Header.css";
import videoCover from "../../assets/CoverWEB.mp4";

const CoverHeader = () => {
  const [opacity, setOpacity] = React.useState("1");
  const [videoPlay, setVideoPlay] = React.useState(false);
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
    console.log("videoRef :>> ", vidRef.current.play());
  };
  // function isMobile() {
  //   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   );
  // }

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
    vidRef.current.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });
    window.screen.width < 820 ? setVideoPlay(false) : setVideoPlay(true);
  }, [vidRef]);

  return (
    <div onScroll={(e) => scrollFunction(e)} className="garden-container">
      <video
        ref={vidRef}
        className="video-intro video-for-mobiles"
        src={videoCover}
        autoPlay={videoPlay}
        loop
        muted
      />
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
      <div onClick={handlePlayVideo} className="video-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            fill="#ffffff"
            d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CoverHeader;
