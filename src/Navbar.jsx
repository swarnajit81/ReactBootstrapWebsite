import React, { useEffect, useState } from "react";
import FormPopUp from "./FormPopUp";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [fade, setFade] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFade(!fade);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div data-aos="fade-down" className="nav-bar container-fluid nav_bg">
        <div className="row row-nav">
          <div className="messi col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid ">
                <div className="logo">
                  <i class="fab fa-react"></i>
                  <a className="navbar-brand" style={{ color: "#ca7016" }}>
                    SMS
                  </a>
                </div>
                <div className="btns d-flex">
                  <a
                    href="#"
                    aria-current="page"
                    className="nav-link btnm btn-signIn"
                  >
                    Want to lend?
                  </a>

                  <a
                    onClick={handleClick}
                    href="#"
                    aria-current="page"
                    className="nav-link btnm btn-signUp"
                  >
                    Log In
                  </a>
                  {fade ? <FormPopUp /> : null}

                  <div className="hamburger">
                    <button className="ham" style={{ border: "none" }}>
                      <i
                        style={{ fontSize: "30px", color: "#ca7016" }}
                        class="fas fa-hamburger"
                      ></i>
                    </button>
                    <div className="drop">
                      <a onClick={handleClick} className="login" href="">
                        Login
                      </a>
                      <a className="land" href="">
                        Want a land?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
