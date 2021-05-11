import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ListItems = () => {
  const [show, setShow] = useState(false);
  const Show = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <>
      <div data-aos="fade-left" className="list">
        <div data-aos="fade-right" className="item d-flex">
          <span>Electronic Gadgets</span> <br />
          <a style={{ boxShadow: "none !important" }} href="" onClick={Show}>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
        </div>
        {show ? (
          <div className="toggle">
            <p>
              Laptops,desktops,Gaming Pc,
              <br />
              and Console, Mobile Phone etc
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ListItems;
