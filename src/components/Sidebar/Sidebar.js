import React from "react";
import { useState, useEffect } from "react";
import "./Sidebar.scss";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";
import ForumIcon from "@material-ui/icons/Forum";
import DraftsIcon from "@material-ui/icons/Drafts";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import LockIcon from "@material-ui/icons/Lock";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Sidebar = ({channels}) => {

  //for cleaner code - always use a variable if you will map a list of component.
  //then just call the variable via jsx
  const renderChannelList = channels.data.data.map(channel => {
    return(
      <Link to={`/channel/${channel.id}`}>
          <SidebarOption Icon={LockIcon} title={channel.name} />
      </Link>
    )
  })
  
  return (
    <div className="sidebar-container-main">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>Avion School</h2>
        </div>
        <CreateIcon />
      </div>

      <Router>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={ForumIcon} title="All DMs" />
        <SidebarOption Icon={DraftsIcon} title="Drafts" />
        <SidebarOption Icon={AlternateEmailIcon} title="Mentions & reactions" />
        <SidebarOption Icon={MoreVertIcon} title="More" />

        <SidebarOption Icon={ArrowDropDownIcon} title="Channels" />
      
        {renderChannelList}
        
        <SidebarOption Icon={AddIcon} title="Add channels" />
        
        <SidebarOption Icon={ArrowDropDownIcon} title="Direct Messages" />
        {/* {dms.map((dm) => (
        <SidebarOption
          Icon={PersonOutlineIcon}
          title={dm.name}
          id={dm.uid}
          key={dm.uid}
        />
        ))} */}
          <SidebarOption Icon={AddIcon} title="Add teammates" />
      </Router>
    </div>
  );
}

export default Sidebar;
