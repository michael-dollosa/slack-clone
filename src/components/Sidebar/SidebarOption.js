import React, { useState } from "react";
import "./SidebarOption.scss";
import { useHistory } from "react-router-dom";
import { createChannel } from "../../api/api";

// const AddChannelForm = () => {
//   return (
//     <form>
//       <label>Enter channel name</label>
//     </form>
//   );
// };

function SidebarOption({ Icon, id, addChannelOption, title }) {
  // const history = useHistory();

  // const selectChannel = () => {
  //       if (id) {
  //           history.push(`/channels/${id}`)
  //       } else {
  //           history.push(title);
  //       }
  // };

  const AddChannel = () => {
    const [channeName, setChannel] = useState();
    const [addMembers, setMembers] = useState();

    return (
      <form>
        <label>Enter channel name</label>
        <input name="channel-name"></input>
      </form>
    );
  };

  return (
    <div
      className="sidebar-option"
      onClick={addChannelOption ? AddChannel : null}
    >
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebar-option-channel">
          <span className="sidebar-option-hash">#</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
