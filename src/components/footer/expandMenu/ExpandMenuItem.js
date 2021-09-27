import React, { useState } from "react";
import ExpandMenuMinus from "./ExpandMenuMinus";
import ExpandMenuPlus from "./ExpandMenuPlus";
import { Link } from "react-router-dom";
import "./expandMenuItem.scss";
const ExpandMenuItem = ({ item }) => {
  const [openExpand, setOpenExpand] = useState(false);
  const toggleExpand = (show) => {
    setOpenExpand(show);
  };
  return (
    <div className="menu footer-item expand-menu-item">
      <p className="menu-title">
        {item.title}
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
        {item.links.map((link, index) => {
          return (
            <p className="fruits" key={index}>
              <Link className="link" to={link.url}>
                {link.title}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default ExpandMenuItem;
