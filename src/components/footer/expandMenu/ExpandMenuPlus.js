import React from "react";

const ExpandMenuPlus = ({ toggleExpand, className }) => {
  return (
    <div
      className={`ExpandMenuPlus ${className}`}
      onClick={() => toggleExpand(true)}
    >
      <i class="fas fa-plus mobile-menu-expand"></i>
    </div>
  );
};
export default ExpandMenuPlus;
