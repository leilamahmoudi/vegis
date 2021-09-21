import React, { useState } from "react";
import ExpandMenuMinus from "../ExpandMenuMinus";
import ExpandMenuPlus from "../ExpandMenuPlus";
const Menu = () => {
  const [openExpand, setOpenExpand] = useState(false);
  const toggleExpand = (show) => {
    setOpenExpand(show);
  };
  return (
    <div className="menu footer-item">
      <p className="menu-title">
        Menu Title
        {openExpand ? (
          <ExpandMenuMinus
            className="expand-minus-icon push-right"
            toggleExpand={toggleExpand}
          />
        ) : (
          <ExpandMenuPlus
            className="expand-plus-icon push-right"
            toggleExpand={toggleExpand}
          />
        )}
      </p>

      <div className={`servises-items ${openExpand ? "show" : "hide"}`}>
        <p className="fruits">Fruits</p>
        <p className="fastFood">Fast Foods</p>
        <p className="vegtable">Vegetable</p>
        <p className="salads">Salads</p>
        <p className="bestSeller">Bestseller</p>
      </div>
    </div>
  );
};
