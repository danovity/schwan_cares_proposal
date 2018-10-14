import React from "react";

export default () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__list-header">Campaigns</li>
          <li className="footer__list-item">Create a Campaign</li>
          <li className="footer__list-item">Find a Campaign</li>
          <li className="footer__list-item">Success Stories</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-header">Help</li>
          <li className="footer__list-item">How It Works</li>
          <li className="footer__list-item">FAQs</li>
          <li className="footer__list-item">Contact Us</li>
          <li className="footer__list-item footter__list-item--phoneNumber">
            1-855-870-7208
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-header">About</li>
          <li className="footer__list-item">Schwan's Cares</li>
          <li className="footer__list-item">As Seen In</li>
          <li className="footer__list-item">Facebook</li>
          <li className="footer__list-item">Twitter</li>
          <li className="footer__list-item">Pinterest</li>
          <li className="footer__list-item">YouTube</li>
        </ul>
      </div>
    </footer>
  );
};
