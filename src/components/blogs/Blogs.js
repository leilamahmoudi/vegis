import React from "react";
import "./blogs.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="container">
        <PageTemplate className="Blogs">
          <div className="Prescription">
            <div className="column-description">
              <div className="title">GRILLED QUORN BUNS IN LIME - RECIPE</div>
              <div className="description">
                Try our lacto-ovo vegetarian recipe for grilled Quorn Buns,
                inspired by Swedish meatballs, in a sour lime and garlic sauce.
                Perfect on the grill and ready in 30 minutes.
              </div>
            </div>
            <div className="column-pic "></div>
          </div>
          <div className="row">
            <div className="column-ingredients"></div>
            <div className="column-recipe "></div>
          </div>
        </PageTemplate>
      </div>
    </div>
  );
};
export default Blogs;