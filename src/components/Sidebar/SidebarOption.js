import React, { useState } from "react";
import "./SidebarOption.scss";
import { useHistory } from "react-router-dom";
import AddChannel from "./AddChannel";

<<<<<<< HEAD
const SidebarOption = ({Icon, id, addChannelOption, title, handleAddChannelToggle = null,}) => {
=======
const SidebarOption = ({
  Icon,
  id,
  addChannelOption,
  title,
  handleAddChannelToggle = null,
  optionType
}) => {
>>>>>>> 7415c3772a797646c456cb6dc3a8363d782c7923
  return (
    <section className="sidebar-option-item">
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
    </section>
  );
};

export default SidebarOption;
