import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shows</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            fuga commodi, reprehenderit odio ducimus aperiam laudantium.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            sint, consequatur in rerum quae numquam totam cumque, doloremque,
            labore non ad pariatur sit itaque ut?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Queen Kerry Beauty and Fashion</span>
          <span className="copyright">
            &copy; Copyright 2023. All rights reserved
          </span>
        </div>
        <div className="right">
          <img
            src="/img/payment.png"
            alt="payment system options"
            width="800"
            height="150"
            object-fit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
