import React from "react";
import "./SidebarOption.scss";
// import { useHistory } from "react-router-dom";
// import { createChannel } from "../../api/api";

function SidebarOption({ Icon, id, addChannelOption, title }) {
  // const history = useHistory();

  // const selectChannel = () => {
  //       if (id) {
  //           history.push(`/channels/${id}`)
  //       } else {
  //           history.push(title);
  //       }
  // };

  // const addChannel = () => {
  //   const channelName = prompt("Please enter the channel name");
  //   if (channelName) {
  //     createChannel.collection('channels').add({
  //       name: channelName
  //     })
  //   }
  // };

  return (
    <div className="sidebar-option">
      {/* onClick={addChannelOption ? addChannel : selectChannel} */}
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebar-option-hash">#</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
