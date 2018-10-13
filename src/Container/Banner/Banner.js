import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <h1 className="heading-primary">
          Highland Community Middle School Project Fund
        </h1>
        <div className="banner__campaign-progress banner__container">
          <div className="banner__campaign-amountRaised__container">
            <div className="banner__campaign-currentRaised">$1070</div>
            <div className="banner__campaign-toBeRaised">of $3,000 Goal</div>
          </div>
          <div className="banner__campaign-teamSize">
            Raised by 59 team members
          </div>
        </div>
        <div className="banner__campaign-duration banner__container--duration banner__container">
          <div className="banner__campaign-daysLeft__container">
            <div className="banner__campaign-daysLeft--number">94</div>
            <div className="banner__campaign-daysLeft--text">days</div>
          </div>
          <p className="normal-text">days left to earn cash back</p>
        </div>
        <div className="banner__campaign-actions banner__container">
          <div className="banner__campaign-button button button__shop-now--full">
            <div className="button__name">Shop Now</div>
            <div className="button__description">
              Earn 20% cash back at schwans.com
            </div>
          </div>
          <div className="banner__campaign-button button button__share--full">
            <div className="button__name">Share</div>
            <div className="button__description">To earn even more</div>
          </div>
          <div className="banner__campaign-createdBy">
            <figure className="image-container__round">
              <img
                src="https://d1zebr6xqllqk1.cloudfront.net/images/users/avatars/000/031/239/square_100/1429018936DSC02472.JPG?1429018936"
                alt="userName"
                className="user-avatar"
              />
            </figure>
            <div className="banner__campaign-createdBy__container--main">
              <p className="normal-text__createdBy">Created by</p>
              <p className="normal-text__userName">Abbie Ramel</p>
              <div className="banner__campaign-createdBy__icon">
                <i class="fas fa-envelope" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
