import { useState } from "react";
import "./AddChannel.scss";
import { createChannel } from "../../api/api";

const AddChannel = () => {
  const [addChannelName, setChannel] = useState("");
  const [addMembers, setMembers] = useState("");

  const onSubmit = (e) => {
    e.prevent.default();

    const addNewChannel = {
      name: addChannelName,
      user_ids: +addMembers,
    };
    createChannel(addNewChannel);
  };

  return (
    <div className="addChannel-form-container">
      <form onSubmit={onSubmit}>
        <div className="addChannel-form">
          <label htmlFor="text">
            <h4>Enter channel name</h4>
          </label>
          <input
            type="text"
            value={addChannelName}
            onChange={(e) => {
              setChannel(e.target.value);
            }}
          ></input>
        </div>
        <div className="addChannel-form">
          <label htmlFor="text">
            <h4>Add members</h4>
          </label>
          <input
            type="number"
            value={addMembers}
            onChange={(e) => {
              setMembers(e.target.value);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddChannel;
