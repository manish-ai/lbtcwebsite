import React from "react";
import { Router, Route, Link } from "react-router-dom";

function ResponsiveHeader() {
  return (
    <div className="App">
      <div className="rspns-hdr">
        <div className="rspns-lg-mnu-br">
          <div className="container">
            <div className="logo">
              <Link to="">
                <img
                  src={require("../../assets/images/logo2.png")}
                  alt="logo2.png"
                  itemprop="image"
                />
              </Link>
            </div>
            <span className="rspns-mnu-btn">
              <i className="fa fa-align-justify"></i>
            </span>
          </div>
          <div className="rspns-mnu">
            <span className="rspns-cls-btn">
              <i className="fa fa-times"></i>
            </span>
            <ul>
              <li className="menu-item-has-children">
                <Link to="/about">About</Link>
              </li>

              <li className="menu-item-has-children">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rspns-lnks-br">
          <div className="rspns-lnks-lst">
            <a
              href="https://www.facebook.com/TeamLBTC/"
              title=""
              itemprop="url"
            >
              <i className="fa fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/team_lbtc/"
              title=""
              itemprop="url"
            >
              <i className="fa fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.twitter.com/teamlbtc/" title="" itemprop="url">
              <i className="fa fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </div>
          <a
            className="thm-btn"
            href="https://milaap.org/fundraisers/cleanathon-by-lbtc"
            title=""
            itemprop="url"
          >
            Donate<span></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveHeader;
