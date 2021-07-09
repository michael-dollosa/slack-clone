import React from "react";
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

function Sidebar() {
  return (
    <div className="sidebar-container-main">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>Avion School</h2>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={ForumIcon} title="All DMs" />
      <SidebarOption Icon={DraftsIcon} title="Drafts" />
      <SidebarOption Icon={AlternateEmailIcon} title="Mentions & reactions" />
      <SidebarOption Icon={MoreVertIcon} title="More" />
      <SidebarOption Icon={ArrowDropDownIcon} title="Channels" />
      <SidebarOption Icon={LockIcon} title="My Channel" />
      <SidebarOption Icon={LockIcon} title="Group 1 Channel" />
      <SidebarOption Icon={AddIcon} title="Add channels" />
      <SidebarOption Icon={ArrowDropDownIcon} title="Direct Messages" />
      <SidebarOption Icon={PersonOutlineIcon} title="Dolee" />
      <SidebarOption Icon={PersonOutlineIcon} title="Frankie" />
      <SidebarOption Icon={PersonOutlineIcon} title="Steph" />
      <SidebarOption Icon={AddIcon} title="Add teammates" />
    </div>
  );
}

export default Sidebar;
