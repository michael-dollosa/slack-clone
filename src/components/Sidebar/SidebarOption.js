import React, { useState } from "react";
import "./SidebarOption.scss";
import { useHistory } from "react-router-dom";
import AddChannel from "./AddChannel";

const SidebarOption = ({ Icon, id, addChannelOption, title }) => {
  return (
    <div
      className="sidebar-option"
      onClick={addChannelOption ? AddChannel : null}
    >
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebar-option-channel">
          <span className="sidebar-option-hash">#</span>
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
