import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <DataContext.Provider value={[quantity, setQuantity]}>
      {children}
    </DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.node,
};
