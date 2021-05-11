import React from "react";

const CardHeader = (props) => {
  return (
    <>
      <div className="card-head container-fluid">
        <div className={props.overlay}>
          <span>{props.span}</span>
        </div>
        <div className={props.name}>
          <p>Search for an item you want to borrow</p>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
