import React, { Component } from "react";

import PageTabs from "./PageTabs";

export class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <a href="https://www.schwans-cares.com/">
            <img
              alt="SCHWAN'S CARES™"
              src="https://d1zebr6xqllqk1.cloudfront.net/images/merchants/site_header_logos/000/000/015/original/Schwans-Cares_AllWhite.png"
            />
          </a>
        </div>
        <ul className="header__left--list">
          <div className="header__left--item">How To Support</div>
          <div className="header__left--item">Contact Us</div>
          <div className="header__left--item">$20 Referral Bonus</div>
        </ul>
        <ul className="header__right--list">
          <div className="header__right--item button button__signup">
            Sign Up
          </div>
          <div className="header__right--item button button__login">Log In</div>
        </ul>
        <PageTabs />
      </div>
    );
  }
}

export default NavBar;
