import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./quntityBox.scss";

const QuntityBox = ({ getQuntity }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    getQuntity(value);
  }, [value]);
  const handelChange = (inputValue) => {
    setValue(inputValue);
  };
  const add = () => {
    if (value < 5) {
      let newValue;
      newValue = value + 1;
      setValue(newValue);
    }
  };
  const reduce = () => {
    if (value > 0) {
      let newValue;
      newValue = value - 1;
      setValue(newValue);
    }
  };

  console.log(value);
  return (
    <div className="QuntityBox">
      <button onClick={() => add()}>+</button>
      <input
        type="number"
        min="0"
        max="5"
        value={value}
        onChange={(event) => handelChange(event.target.value)}
      />
      <button onClick={() => reduce()}>-</button>
    </div>
  );
};
QuntityBox.propTypes = {
  getQuntity: PropTypes.func,
};

export default QuntityBox;
