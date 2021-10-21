import React from "react";
import "./collection.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";
const Collection = () => {
  return (
    <div className="Collection">
      <PageTemplate>
        <div className="container">
          <div className="collection-box">
            <div className="row-collection-pic">
              <div className="culom-collection-breakfast">
                <figure className="collection-img">
                  <img
                    className="column-pic-img"
                    src="https://www.tasteofhome.com/wp-content/uploads/2018/05/Garden-Fresh-Grilled-Veggie-Pizza_EXPS_SDJJ18_215090_B02_13_3b-5.jpg?w=1200"
                    alt="Card cap"
                  />
                </figure>
              </div>
              <div className="culom-collection-lunch">
                <figure className="collection-img">
                  <img
                    className="column-pic-img"
                    src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps191271_TH163620C11_18_5b-5.jpg?w=1200"
                    alt="Card cap"
                  />
                </figure>
              </div>
              <div className="culom-collection-dinner">
                <figure className="collection-img">
                  <img
                    className="column-pic-img"
                    src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps178590_TH143194D06_19_6b-2.jpg?w=1200"
                    alt="Card cap"
                  />
                </figure>
              </div>
            </div>
            <div className="row-collection-offer">
              <div className="go-recipes-card">
                <div className="card-collection-body">
                  <a
                    className="titile-coll"
                    href="https://www.tasteofhome.com/collection/vegetarian-meal-plan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Go for easy ideas
                  </a>
                </div>
              </div>
              <div className="go-recipes-card">
                <div className="card-collection-body">
                  <a
                    className="titile-coll"
                    href="https://www.tasteofhome.com/collection/vegetarian-meal-plan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go for easy ideas
                  </a>
                </div>
              </div>
              <div className="go-recipes-card">
                <div className="card-collection-body">
                  <a
                    className="titile-coll"
                    href="https://www.tasteofhome.com/collection/vegetarian-meal-plan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go for easy ideas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
};
export default Collection;
