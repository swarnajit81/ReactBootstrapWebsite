import React from "react";

const FooterList = () => {
  return (
    <>
      <div className="footer-col">
        <h4>SMS</h4>
        <ul>
          <li>
            <a href="">about us</a>
          </li>
          <li>
            <a href="">our services</a>
          </li>
          <li>
            <a href="">our policies</a>
          </li>
          <li>
            <a href="">affiliate program</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li>
            <a href="">shipping</a>
          </li>
          <li>
            <a href="">return</a>
          </li>
          <li>
            <a href="">order status</a>
          </li>
          <li>
            <a href="">payment methods</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>online shoop</h4>
        <ul>
          <li>
            <a href="">shoes</a>
          </li>
          <li>
            <a href="">bag</a>
          </li>
          <li>
            <a href="">watch</a>
          </li>
          <li>
            <a href="">hardwares</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterList;
