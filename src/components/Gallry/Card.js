import React, { useState } from "react";

const Card = (props) => {
  const [popup, setPopup] = useState(false);
  const toggleModal = () => {
    setPopup(!popup);
  };
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={props.images} />
          <i className="fas fa-image" onClick={toggleModal}></i>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
