import React from "react";
import "./Reviews.css";
const Reviews = () => {
  const AirbnbLogo = () => {
    return (
      <div style={{ width: "30px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z" />
        </svg>
      </div>
    );
  };
  return (
    <div className="reviews">
      <h1>What people say about us..</h1>
      <div className="outerdiv">
        <div className="innerdiv">
          {/* <!-- div1 --> */}
          <div className="div1 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <AirbnbLogo />
              </div>
              <div className="detbox">
                <p className="name">Cecilia</p>
                <p className="designation">August 2021</p>
              </div>
            </div>
            <div className="review">
              <h4>
                This place is great! Way bigger than it looks like in the
                pictures. Hosts were very accommodating working with our delayed
                flight check-in (around 1 PM). Three floors with a lot of space
                separation. Highly recommended.
              </h4>
              {/* <p>
                “ I was an EMT for many years before I joined the bootcamp. I’ve
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I’ve successfully
                switched careers, working as a Software Engineer at a VR
                startup. ”
              </p> */}
            </div>
          </div>
          {/* <!-- div2 --> */}
          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <AirbnbLogo />
              </div>
              <div className="detbox">
                <p className="name">Alessandro</p>
                <p className="designation">2021</p>
              </div>
            </div>
            <div className="review">
              <h4>
                Exactly as per description. Clean as every Airbnb should be. The
                inner garden is amazing. Would come again.
              </h4>
              {/* <p>
                “ I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I’ve made in myself. ”
              </p> */}
            </div>
          </div>
          {/* <!-- div3 --> */}
          <div className="div3 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <AirbnbLogo />
              </div>
              <div className="detbox">
                <p className="name">Whitney</p>
                <p className="designation dark">2021</p>
              </div>
            </div>
            <div className="review dark">
              <h4>
                {" "}
                This home is huge! There is so much natural light and it’s very
                comfortable. We loved staying in townhome and how convenient it
                was to get around and find everything we needed. The hosts had
                great recommendations for restaurants and shopping. A Wonderful
                stay, thank you!
              </h4>
            </div>
          </div>
          {/* <!-- div4 --> */}
          <div className="div4 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <AirbnbLogo />
              </div>
              <div className="detbox">
                <p className="name dark">Samuel</p>
                <p className="designation dark">2017</p>
              </div>
            </div>
            <div className="review dark">
              <h4>
                Great place inside one of the most colorful and chic
                neighborhoods of Mexico City. Clean and incredibly peaceful
                place.
              </h4>
            </div>
          </div>
          {/* <!-- div5 --> */}
          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <AirbnbLogo />
              </div>
              <div className="detbox">
                <p className="name">Gabriela</p>
                <p className="designation">2017</p>
              </div>
            </div>
            <div className="review">
              <h4>
                Juan Gabriel is an extraordinary host, he made my stay pleasant
                and very relaxing. I truly recommend it to everyone looking for
                an amazing experience. Thank you so much for everything!!!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
