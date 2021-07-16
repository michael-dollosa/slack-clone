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
import { useHistory, NavLink } from "react-router-dom";

const Sidebar = ({ channels, interactedUsers, handleAddChannelToggle, toggleRender }) => {

  const [toggleUserDropdown, setToggleUserDropdown] = useState(false)
  const [toggleChannelDropdown, setToggleChannelDropdown] = useState(false)
  const history = useHistory()

  const handleToggleUserDropdown = () => {
    setToggleUserDropdown(!toggleUserDropdown)
  }

  const handleToggleChannelDropdown = () => {
    setToggleChannelDropdown(!toggleChannelDropdown)
  }

  const newMessageHistoryPush = () => {
    history.push(`/new-message`)
  }
  //for cleaner code - always use a variable if you will map a list of component.
  //then just call the variable via jsx
  //in this variable, since we are dealing with API data, variable in conditioned based first if there is data or not.
  const renderChannelList = channels.data.data 
  ? channels.data.data.map((channel, index) => {
    return (
      <NavLink to={`/channel/${channel.id}`} >
        <SidebarOption key={index} Icon={CgLock} title={channel.name} optionType="channel" />
      </NavLink>
    );
  })
  : null
  
  const renderUserList = interactedUsers
  ? interactedUsers.map((user, index) => {
    return (
      <NavLink to={`/user/${user.id}`}>
        <SidebarOption key={index} Icon={`https://picsum.photos/id/${user.id}/20`} title={user.uid}  optionType="user"/>
      </NavLink>
    );
  })
  : null

  useEffect(() => {
    
  }, [toggleRender])
  return (
    <div className="sidebar-container-main">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>
            Avion School <BiChevronDown className="icon"/>
          </h2>
        </div>
        <FiEdit onClick={newMessageHistoryPush}/>
      </div>
    <div className="sidebar-option-container">

    <section className="sidebar-option-header">
      <SidebarOption Icon={BiMessageRoundedDetail} title="Threads" />
      <SidebarOption Icon={IoChatbubblesOutline} title="All DMs" />
      <SidebarOption Icon={HiOutlineDocumentDuplicate} title="Drafts" />
      <SidebarOption Icon={GoMention} title="Mentions & reactions" />
      <SidebarOption Icon={MoreVertIcon} title="More" />
    </section>

    <section className="sidebar-option-channelList">
    {/*<SidebarOption Icon={ArrowDropDownIcon} title="Channels" />*/}
      <div className="sidebar-option-list-header">
        <ArrowDropDownIcon className={ !toggleChannelDropdown ? `icon` : `icon rotate`} onClick={handleToggleChannelDropdown}/>
        <h1>Channels</h1>
      </div>
      
      <div className={ !toggleChannelDropdown ? `sidebaroption-child` : `sidebaroption-child hidden`}>
      {renderChannelList}
      </div>
      <SidebarOption
        Icon={AddIcon}
        handleAddChannelToggle={handleAddChannelToggle}
        title="Add channels"
      />
    </section>
      
    <section className="sidebar-option-userList">
      {/*<SidebarOption Icon={ArrowDropDownIcon} title="Direct Messages" />*/}
      <div className="sidebar-option-list-header">
        <ArrowDropDownIcon className={ !toggleUserDropdown ? `icon` : `icon rotate`} onClick={handleToggleUserDropdown}/>
        <h1>Direct Messages</h1>
      </div>
      <div className={ !toggleUserDropdown ? `sidebaroption-child` : `sidebaroption-child hidden`}>
        {renderUserList}
      </div>
      <SidebarOption Icon={AddIcon} title="Add teammates" />
    </section>
     
    </div>
      
    </div>
  );
};

export default Sidebar;
