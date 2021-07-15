import { useState } from "react";
import "./AddChannel.scss";
import { IoCloseOutline } from "react-icons/io5";
import { createChannel } from "../../api/api";

const AddChannel = ({
  headers,
  handleDummyAddChannel,
  handleAddChannelToggle,
}) => {
  const [addChannelName, setChannel] = useState("");
  const [addMembers, setMembers] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const addNewChannel = {
      name: addChannelName,
      user_ids: parseInt(addMembers),
      headers: headers,
    };
    console.log(addNewChannel);
    createChannel(addNewChannel)
      .then((res) => {
        console.log("Add channel success", res);
        handleDummyAddChannel();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addChannel-form-container">
      <div className="addChannel-form-items">
        <div className="addChannel-form-header">
          <h1>Create a private channel</h1>
          <IoCloseOutline onClick={!handleAddChannelToggle} />
        </div>
        <div className="addChannel-form-text">
          <h2>
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </h2>
        </div>

        <form onSubmit={onSubmit}>
          <div className="addChannel-form">
            <label htmlFor="text">
              <h2>Name</h2>
            </label>
            <input
              type="text"
              value={addChannelName}
              onChange={(e) => {
                setChannel(e.target.value);
              }}
            ></input>
          </div>
          {/* <div className="addChannel-form">
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
          </div> */}
          <div className="addChannel-form-btn">
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChannel;
