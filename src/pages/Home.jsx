import React from "react";
import Barrio from "../components/Barrio/Barrio.jsx";
// import Cards from "../Cards";
import CoverHeader from "../components/Header/CoverHeader.jsx";
import Services from "../components/Services/Services.jsx";

function Home() {
  return (
    <>
      <CoverHeader />
      <Services />
      <Barrio />
    </>
  );
}

export default Home;
