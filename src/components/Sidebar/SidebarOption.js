import React, { useState } from "react";
import "./SidebarOption.scss";
import { useHistory } from "react-router-dom";
import AddChannel from "./AddChannel";

const SidebarOption = ({Icon, id, addChannelOption, title, handleAddChannelToggle = null,}) => {
  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? (
        <h3 onClick={handleAddChannelToggle}>{title}</h3>
      ) : (
        <h3 className="sidebar-option-channel">
          <span className="sidebar-option-hash">#</span>
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
