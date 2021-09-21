import React, { useState } from "react";
import ExpandMenuMinus from "components/footer/expandMenu/ExpandMenuMinus";
import ExpandMenuPlus from "components/footer/expandMenu/ExpandMenuPlus";

const Privacy = () => {
  const [openExpand, setOpenExpand] = useState(false);
  const toggleExpand = (show) => {
    setOpenExpand(show);
  };
  return (
    <div className="privacy footer-item">
      <p className="privacy-title">
        Privacy & policy
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
        <p className="payment">Payment Policy</p>
        <p className="return">Return Policy</p>
        <p className="shipping-policy">Shipping Policy</p>
        <p className="terms">Terms & Conditions</p>
      </div>
    </div>
  );
};
export default Privacy;
