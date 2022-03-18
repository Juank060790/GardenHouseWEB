import React from "react";
import "./Barrio.css";

import PropTypes from "prop-types";
import Reviews from "../Reviews/Reviews";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="420"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

const Barrio = () => {
  return (
    <div className="barrio">
      <Reviews />

      <section className="bubble">
        <h1>El Barrio</h1>
        <div className="barrio-container">
          <YoutubeEmbed embedId="pwEpQlyHJU8" />

          <YoutubeEmbed embedId="29wWByUw-1g" />
        </div>
      </section>
    </div>
  );
};

export default Barrio;
