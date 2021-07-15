import React, { useState } from "react";
import "./SidebarOption.scss";
import { useHistory } from "react-router-dom";
import AddChannel from "./AddChannel";

const SidebarOption = ({
  Icon,
  id,
  addChannelOption,
  title,
  handleAddChannelToggle = null,
  optionType,
}) => {
  // return (
  //   <section className="sidebar-option-item">
  //     <div className="sidebar-option">
  //       {Icon && <Icon className="sidebar-option-icon sidebar-option-flex-center" />}
  //       {Icon
  //       ? (
  //         <h3 onClick={handleAddChannelToggle}>{title}</h3>
  //         )
  //       : (
  //         <h3 className="sidebar-option-channel sidebar-option-flex-center">
  //           <span className="sidebar-option-hash">#</span>
  //         </h3>
  //         )
  //       }
  //     </div>
  //   </section>
  // );

  return (
    <section className="sidebar-option-item">
      {optionType ? (
        optionType === "user" ? (
          <div className="sidebar-option">
            <section className="sidebar-option-user-img sidebar-option-flex-center">
              <img src={Icon} />
            </section>
            {Icon ? (
              <h3 onClick={handleAddChannelToggle}>{title}</h3>
            ) : (
              <h3 className="sidebar-option-channel sidebar-option-flex-center">
                <span className="sidebar-option-hash">#</span>
              </h3>
            )}
          </div>
        ) : (
          <div className="sidebar-option">
            {Icon && (
              <Icon className="sidebar-option-icon sidebar-option-flex-center" />
            )}
            {Icon ? (
              <h3 onClick={handleAddChannelToggle}>{title}</h3>
            ) : (
              <h3 className="sidebar-option-channel sidebar-option-flex-center">
                <span className="sidebar-option-hash">#</span>
              </h3>
            )}
          </div>
        )
      ) : (
        <div className="sidebar-option">
          {Icon && (
            <Icon className="sidebar-option-icon sidebar-option-flex-center" />
          )}
          {Icon ? (
            <h3 onClick={handleAddChannelToggle}>{title}</h3>
          ) : (
            <h3 className="sidebar-option-channel sidebar-option-flex-center">
              <span className="sidebar-option-hash">#</span>
            </h3>
          )}
        </div>
      )}
    </section>
  );
};

export default SidebarOption;
