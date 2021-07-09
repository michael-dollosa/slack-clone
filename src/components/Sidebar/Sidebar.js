import React from "react";
import "./Sidebar.scss";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";
import ForumIcon from "@material-ui/icons/Forum";
import DraftsIcon from "@material-ui/icons/Drafts";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container-main">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>Avion School</h2>
        </div>
        <CreateIcon />
      </div>
      <ul>
        <li>
          <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        </li>
        <li>
          <SidebarOption Icon={ForumIcon} title="All DMs" />
        </li>
        <li>
          <SidebarOption Icon={DraftsIcon} title="Drafts" />
        </li>
        <li>
          <SidebarOption
            Icon={AlternateEmailIcon}
            title="Mentions & reactions"
          />
        </li>
        <li>
          <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        </li>
        <li>
          <SidebarOption title="#Group 1" />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
