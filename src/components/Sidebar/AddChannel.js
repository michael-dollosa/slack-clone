import React, { useState } from "react";
import { createChannel } from "../../api/api";

const AddChannel = () => {
  const [channelName, setChannel] = useState("");
  const [addMembers, setMembers] = useState("");

  const onSubmit = (e) => {
    e.prevent.default();

    const addNewChannel = {
      name: channelName,
      user_ids: addMembers,
    };
    createChannel(addNewChannel);

    return (
      <div className="channel-form-container">
        <form onSubmit={onSubmit}>
          <div className="channel-form">
            <label htmlFor="text">
              <h4>Enter channel name</h4>
            </label>
            <input
              type="text"
              value={channelName}
              onChange={(e) => setChannel(e.target.value)}
            ></input>
          </div>
          <div className="channel-form">
            <label htmlFor="text">
              <h4>Add members</h4>
            </label>
            <input
              type="number"
              value={addMembers}
              onChange={(e) => setMembers(e.target.value)}
            ></input>
          </div>
        </form>
      </div>
    );
  };
};

export default AddChannel;
