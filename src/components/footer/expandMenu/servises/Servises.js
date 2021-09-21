import React, { useState } from "react";
import ExpandMenuMinus from "components/footer/expandMenu/ExpandMenuMinus";
import ExpandMenuPlus from "components/footer/expandMenu/ExpandMenuPlus";
import "./servises.scss";

const Servises = () => {
  const [openExpand, setOpenExpand] = useState(false);
  const toggleExpand = (show) => {
    setOpenExpand(show);
  };
  return (
    <div className="servises footer-item">
      <p className="servises-title">
        Servises
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
        <p className="about-vegist">About Vegist</p>
        <p className="faq's">Faq's</p>
        <p className="contact-us">Contact Us</p>
        <p className="news">News</p>
        <p className="sitemap">Sitemap</p>
      </div>
    </div>
  );
};
export default Servises;
