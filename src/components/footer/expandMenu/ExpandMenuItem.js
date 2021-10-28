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
      <div className="menu-title">
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
      </div>

      <div className={`servises-items ${openExpand ? "show" : "hide"}`}>
        {item.links.map((link, index) => {
          return (
            <p className="fruits" key={index}>
              <Link className="link-servises-items-menue" to={link.url}>
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
