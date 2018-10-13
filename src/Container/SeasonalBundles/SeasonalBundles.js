import React, { Component } from "react";
export default class SeasonalBundles extends Component {
  render() {
    return (
      <section className="seasonal-bundles">
        <div className="seasonal-bundles__container">
          <figure className="seasonal-bundles__img-container">
            <img
              src="https://schwans-prod.imgix.net/images/modifiers/images/000/000/012/original/bundle_1.png?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=640"
              alt="Premium Collection"
              className="seasonal-bundles__img"
            />
          </figure>
          <div className="seasonal-bundles__content">
            <div className="seasonal-bundles__header">Premium Collection</div>
            <div className="seasonal-bundles__description">
              A wide variety of our finest seafood, poultry and meat.
            </div>
            <div className="seasonal-bundles__actions">
              <div className="seasonal-bundles__price">$108.95</div>
              <div className="seasonal-bundles__buttons">
                <div className="button button__normal button__normal--shop">
                  Shop
                </div>
                <div className="button button__normal button__normal--share">
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
