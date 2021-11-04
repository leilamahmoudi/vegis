import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./vegistDropDown.scss";

const VegidtDropDown = ({ title, items, className }) => {
  const menu = (
    <Menu>
      {items.map((item) => {
        return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
      })}
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      className={` ${className} vegis-drop-down`}
    >
      <div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {title} <DownOutlined />
      </div>
    </Dropdown>
  );
};
export default VegidtDropDown;
