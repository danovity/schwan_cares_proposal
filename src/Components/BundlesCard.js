import React from "react";

export default ({ title, description, price, imageUrl, index }) => {
  return (
    <div className="seasonal-bundles__container" key={index}>
      <figure className="seasonal-bundles__img-container">
        <img src={imageUrl} alt={title} className="seasonal-bundles__img" />
      </figure>
      <div className="seasonal-bundles__content">
        <div className="seasonal-bundles__header">{title}</div>
        <div className="seasonal-bundles__description">{description}</div>
        <div className="seasonal-bundles__actions">
          <div className="seasonal-bundles__price">${price}</div>
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
  );
};
