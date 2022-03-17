import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import RoomsData from "../assets/RoomsConstants.js";
import RoomCard from "../components/RoomCard/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = React.useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (RoomsData) {
      setRooms(RoomsData);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <h1>Rooms</h1>

      <div className="rooms-container">
        {rooms ? (
          RoomsData.map((room) => <RoomCard key={room.id} {...room} />)
        ) : (
          <Spinner animation="grow" variant="success" />
        )}
      </div>
    </div>
  );
};

export default Rooms;
