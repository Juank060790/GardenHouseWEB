import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import RoomsData from "../assets/RoomsConstants.js";
import RoomCard from "../components/RoomCard/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = React.useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = React.useState(true);
  const [hideCards, setHideCards] = React.useState(true);

  useEffect(() => {
    if (RoomsData) {
      setRooms(RoomsData);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <div className="custom-shape-divider-top-1647620618">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h1>Rooms</h1>

      <div className={`rooms-container ${!hideCards && "hide-cards"}`}>
        {rooms ? (
          RoomsData.map((room) => (
            <RoomCard
              key={room.id}
              roomsData={{ ...room }}
              setHideCards={setHideCards}
              hideCards={hideCards}
            />
          ))
        ) : (
          <Spinner animation="grow" variant="success" />
        )}
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

export default Rooms;
