import React, { Component } from "react";
import FeaturedProductsCard from "../../Components/FeaturedProductsCard";

export default ({ featuredProducts }) => {
  return (
    <section className="featured-products">
      {featuredProducts
        ? featuredProducts.map(({ name, image }) => (
            <FeaturedProductsCard name={name} imageUrl={image} />
          ))
        : null}
    </section>
  );
};
