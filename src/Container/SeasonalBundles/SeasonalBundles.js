import React from "react";
import BundlesCard from "../../Components/BundlesCard";

export default ({ bundles }) => {
  return (
    <section className="seasonal-bundles">
      {bundles
        ? bundles.map(({ title, description, price, image }, index) => (
            <BundlesCard
              title={title}
              description={description}
              price={price}
              imageUrl={image}
              key={index}
            />
          ))
        : null}
    </section>
  );
};
