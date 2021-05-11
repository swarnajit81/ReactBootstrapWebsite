import React from "react";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="containers">
        <div className="row-footer">
          <FooterList />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
