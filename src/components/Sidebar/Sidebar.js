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
import { getChannels } from "../../api/api";
// import { getChannels } from "../../api/api";

const Sidebar = () => {

  const [dms, setDms] = useState([]);

  const headers = {
    token: "vTbXQNoxmh0lS56FUm-Edg",
    client: "jHFYPMzZW8o1qNH_Yuf19g",
    expiry: "1627036215",
    uid: "dolee@example.com"
  }

  const channels = () => {
    getChannels(headers)
    .then(response => console.log("All Channels:", response))
  }

  useEffect(() => {
    channels()
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

        <SidebarOption Icon={ArrowDropDownIcon} title="Channels" onClick={channels}/>
        
        <Link to={`/${headers.client}/${headers.uid}`}>
          <SidebarOption Icon={LockIcon} title="My Channel" />
        </Link>
        
        <SidebarOption Icon={AddIcon} title="Add channels" />
        {/* {
          channels.map(channel => (
            <SidebarOption title={channel.name} id={channel.id} />
            )
          )
        } */}
        
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
