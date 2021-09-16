import React from "react";

const ExpandMenuMinus = ({ toggleExpand, className }) => {
  return (
    <div
      className={`ExpandMenuMinus ${className}`}
      onClick={() => toggleExpand(false)}
    >
      <i class="fas fa-minus"></i>
    </div>
  );
};
export default ExpandMenuMinus;
