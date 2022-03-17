import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = (roomsData) => {
  return (
    <>
      <Carousel touch={true} interval={null}>
        {roomsData.images.images.map((image) => (
          <Carousel.Item key={roomsData.id}>
            <img
              className="d-block h-100 w-100"
              src={image}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>{roomsData.images[0]}</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
