import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            được sử dụng để chỉ định các hình ảnh có kích thước khác nhau cho
            các màn hình có độ phân giải khác nhau. .
          </p>
          <div className="footer-scoilal-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery </li>
            <li>Frivacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get IN TOUCH</h2>
          <ul>
            <li>123-456-789</li>
            <li>hanvph35034@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Bản quyền thuộc về msv Ph35034</p>
    </div>
  );
};

export default Footer;
