import React from "react";
import Allltem from "../../Destations/Allltem";
import '../Popular/MostPopular.css'

const DestinationHome = () => {
  return (
    <>
      <section className="popular top">
        <div className="full_container">
          <div className="heading">
            <h1>Most Popular Destination</h1>
            <div className="line"></div>
          </div>

          <div className="content">
            <Allltem />
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationHome;
