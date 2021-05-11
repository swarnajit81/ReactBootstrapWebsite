import React from "react";
import driller from "../src/images/driller.png";

const Card = () => {
  return (
    <>
      <div className="containerm">
        <div className="cardm">
          <div className="imgbx">
            <img className="img" src={driller} alt="" />
          </div>
          <div className="contentBx">
            <a href="">Hardware Equipment</a>
            <span className="spn1">Bosh Drilling Machine</span>
            <p className="p1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              minima praesentium vero, culpa.
            </p>
            <div className="price-star d-flex">
              <p>
                $5<span>/day</span>
              </p>
              <i class="fas fa-star">
                <span className="rate">4.5(27)</span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
