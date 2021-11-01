import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const qty = localStorage.getItem("cart");
  const currentQty = qty ? JSON.parse(qty).total : 0;
  const [quantity, setQuantity] = useState(currentQty);

  return (
    <DataContext.Provider value={[quantity, setQuantity]}>
      {children}
    </DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.node,
};
