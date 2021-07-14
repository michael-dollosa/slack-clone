import React from "react";
import { useState, useEffect } from "react";
import "./Sidebar.scss";
import SidebarOption from "./SidebarOption";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { FiEdit } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { GoMention } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = ({ channels, users }) => {
  //for cleaner code - always use a variable if you will map a list of component.
  //then just call the variable via jsx
  const renderChannelList = channels.data.data.map((channel, index) => {
    return (
      <Link to={`/channel/${channel.id}`}>
        <SidebarOption key={index} Icon={CgLock} title={channel.name} />
      </Link>
    );
  });

  const renderUserList = users.data.data.map((user, index) => {
    return (
      <Link to={`/user/${user.id}`}>
        <SidebarOption key={index} Icon={ArrowDropDownIcon} title={user.uid} />
      </Link>
    ) 
  })

  return (
    <div className="sidebar-container-main">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>
            Avion School <BiChevronDown />
          </h2>
        </div>
        <FiEdit />
      </div>


        <SidebarOption Icon={BiMessageRoundedDetail} title="Threads" />
        <SidebarOption Icon={IoChatbubblesOutline} title="All DMs" />
        <SidebarOption Icon={HiOutlineDocumentDuplicate} title="Drafts" />
        <SidebarOption Icon={GoMention} title="Mentions & reactions" />
        <SidebarOption Icon={MoreVertIcon} title="More" />


        <SidebarOption Icon={ArrowDropDownIcon} title="Channels" />
        {renderChannelList}
        <SidebarOption Icon={AddIcon} title="Add channels" />

        <SidebarOption Icon={ArrowDropDownIcon} title="Direct Messages" />
        {renderUserList}
        <SidebarOption Icon={AddIcon} title="Add teammates" />

    </div>
  );
};

export default Sidebar;