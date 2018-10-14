import React from "react";

export default ({ header, subheader }) => {
  return (
    <div className="section-header">
      <h2 className="heading-secondary">{header}</h2>
      <p className="normal-text normal-text--section">{subheader}</p>
    </div>
  );
};
