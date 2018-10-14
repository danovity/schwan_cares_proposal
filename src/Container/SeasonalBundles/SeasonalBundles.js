import React from "react";
import BundlesCard from "../../Components/BundlesCard";

export default ({ bundles }) => {
  console.log("inside bundles,", bundles);
  return (
    <section className="seasonal-bundles">
      {bundles
        ? bundles.map(({ title, description, price, image }) => (
            <BundlesCard
              title={title}
              description={description}
              price={price}
              imageUrl={image}
            />
          ))
        : null}
    </section>
  );
};
