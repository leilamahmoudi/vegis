import React from "react";
import "./collection.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";
const Collection = () => {
  return (
    <div className="Collection">
      <PageTemplate>
        <div className="container">
          <div className="collection">
            This page is not available
            <img
              className="collection-img"
              src="https://i.pinimg.com/originals/e0/34/1d/e0341dab7619da163adf938cf2d162c9.gif"
            />
          </div>
        </div>
      </PageTemplate>
    </div>
  );
};
export default Collection;
