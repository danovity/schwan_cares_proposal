import React from "react";
import FeaturedProductsCard from "../../Components/FeaturedProductsCard";

export default ({ featuredProducts }) => {
  return (
    <section className="featured-products">
      {featuredProducts
        ? featuredProducts.map(({ name, image }, index) => (
            <FeaturedProductsCard name={name} imageUrl={image} key={index} />
          ))
        : null}
    </section>
  );
};
