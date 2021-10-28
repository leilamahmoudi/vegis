import React, { useState } from "react";
import PropTypes from "prop-types";
import "./quntityBox.scss";

const QuntityBox = ({ getQuntity, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || 0);

  const handelChange = (inputValue) => {
    setValue(inputValue);
  };
  const add = () => {
    if (value < 5) {
      let newValue;
      newValue = value + 1;
      setValue(newValue);
      getQuntity(newValue);
    }
  };
  const reduce = () => {
    if (value > 0) {
      let newValue;
      newValue = value - 1;
      setValue(newValue);
      getQuntity(newValue);
    }
  };

  return (
    <div className="QuntityBox">
      <p className="quntity-title">Quntity:</p>
      <button className="plus-btn" onClick={() => add()}>
        +
      </button>
      <input
        className="input-quntity"
        type="number"
        min="0"
        max="5"
        value={value}
        onChange={(event) => handelChange(event.target.value)}
      />
      <button className="minus-btn" onClick={() => reduce()}>
        -
      </button>
    </div>
  );
};
QuntityBox.propTypes = {
  getQuntity: PropTypes.func,
  defaultValue: PropTypes.number,
};

export default QuntityBox;
