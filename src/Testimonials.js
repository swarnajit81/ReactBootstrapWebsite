import React from "react";

const Testimonials = (props) => {
  return (
    <div className="card-test">
      <div className="layer"></div>
      <div className="content">
        <p>{props.para}</p>
      </div>
      <div className="card-image">
        <img src={props.img} alt="" />
      </div>
      <div className="detail">
        <h2>{props.header}</h2>
        <span>{props.span}</span>
      </div>
    </div>
  );
};

export default Testimonials;
