import React, { Component } from "react";

export default ({ name, imageUrl }) => {
  return (
    <div className="featured-products__container">
      <div className="featured-products__header">{name}</div>
      <figure className="featured-products__image-container">
        <img src={imageUrl} alt="Meats" className="featured-products__image" />
      </figure>
      <div className="featured-products__button">Earn 20% cash back</div>
    </div>
  );
};
