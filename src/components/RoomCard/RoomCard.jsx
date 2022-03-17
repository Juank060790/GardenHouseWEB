import React from "react";
import ImageCarousel from "../ImageCarousel";
import "./RoomCard.css";

const RoomCard = (roomsData) => {
  const { title, description, airbnLink } = roomsData;

  return (
    <div className="card">
      <ImageCarousel images={roomsData} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <a target="_blank" rel="noopener noreferrer" href={airbnLink}>
          <h5>{airbnLink}</h5>
        </a>
      </div>
    </div>
  );
};

export default RoomCard;
