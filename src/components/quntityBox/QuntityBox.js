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
};

export default QuntityBox;
