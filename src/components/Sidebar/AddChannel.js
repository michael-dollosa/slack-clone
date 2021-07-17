import { useState } from "react";
import "./AddChannel.scss";
import { IoCloseOutline } from "react-icons/io5";
import { createChannel } from "../../api/api";
import AddUser from "../../forms/AddUser/AddUser";
import { useHistory } from "react-router-dom"
import Warning from "../Warnings/Warning";

const AddChannel = ({ headers, handleDummyAddChannel, handleClose, toggleAddChannel }) => {
  //for input
  const [addChannelName, setChannel] = useState("");
  const [getUserArr, setGetUserArr] = useState([])
  const [formCreateChannelToggle, setFormCreateChannelToggle] = useState(false);
  const [formAddUserToggle, setFormAddUserToggle] = useState(false)
  const [addUserToggle, setAddUserToggle] = useState(false);
  const [toggleWarning, setToggleWarning] = useState(false)
  const [toggleSubmitWarning, setToggleSubmitWarning] = useState(false)
  //used to push to URL of created channel upon success
  const history = useHistory()

  const handleSetToggleSubmitWarning = (data) => {
    setToggleSubmitWarning(data)
  }
  const handlesetGetUserArr = (usersToBeAdded) => {

    //create an array of just ids of users to be added
    const pullUserId = usersToBeAdded.map(user => user.id)
    setGetUserArr(pullUserId)
  }

  const showAddUser = () => {
    setAddUserToggle(!addUserToggle);
  };

  const handleFormCreateChannelToggle = () => {
    // if (addChannelName === "") return;
    console.log("Add Channel Form 1 Toggle", formCreateChannelToggle)
    setFormCreateChannelToggle(!formCreateChannelToggle);
    handleClose()
  };

  const handleFormCreateChannelConfirmBtn = () => {
    // console.log(addChannelName.length, addChannelName)
    //validation for minimum string
    if(addChannelName.length < 3 || (addChannelName === "") || addChannelName.length > 15) return setToggleWarning(true)
    //hide create channel
    setFormCreateChannelToggle(!formCreateChannelToggle);
    //show add user
    setFormAddUserToggle(!formAddUserToggle)
  }

  const handleFormSubmitToggle = () => {
    handleDummyAddChannel()
    setFormAddUserToggle(false)
    setFormCreateChannelToggle(false)
    handleClose()
  }

  const handleFormAddUserExit = () => {
    setFormAddUserToggle(false)
    handleClose()

  }

  const onSubmit = (e) => {
    e.preventDefault();
  
    setToggleSubmitWarning(false)
    //create obj
    const addNewChannel = {
      name: addChannelName,
      user_ids: getUserArr,
      headers: headers,
    };

    //request api
    createChannel(addNewChannel)
      .then((res) => {
        const channelId = res.data.data.id
        handleFormSubmitToggle()
        //push to URL of Channel
        history.push(`/channel/${channelId}`)
      })
      .catch((err) => {
        console.log("Create Channel Error",err)
        setToggleSubmitWarning(true)
      });
  };

  return (
    <div
      className={
        !toggleAddChannel
          ? `addChannel-form-container addChannel-hidden`
          : `addChannel-form-container addChannel-block`
      }
    >
      <form className="addChannel-form" onSubmit={onSubmit}>
        {/**Add User Part */}
        <div
          className={
            formAddUserToggle
              ? `addUserForm-container addChannel-block`
              : `addUserForm-container addChannel-hidden`
          }
        >
        <AddUser 
          headers={headers} 
          handleFormAddUserExit={handleFormAddUserExit} 
          handlesetGetUserArr={handlesetGetUserArr}
          name={addChannelName}
          toggleSubmitWarning={toggleSubmitWarning}
          handleSetToggleSubmitWarning={handleSetToggleSubmitWarning}
        />
        </div>

        {/**Create Channel Part */}
        <div
          className={
            formCreateChannelToggle
              ? `addChannel-form-items addChannel-hidden`
              : `addChannel-form-items addChannel-block`
          }
        >
          <div className="addChannel-form-header">
            <div className="addChannel-closeBtn">
              <IoCloseOutline onClick={handleFormCreateChannelToggle} />
            </div>
            <h1>Create a channel</h1>
          </div>
          <Warning body={ "Name should within 3 - 15 characters long" } showWarning={toggleWarning}/>
          <h5>
            <span>
              Channels are where your team communicates. They're best when
              organized around a topic — #marketing, for example.
            </span>
          </h5>
          <div className="addChannel-form-input">
            <h3>Name</h3>
            <input
              type="text"
              placeholder="e.g. plan-budget"
              value={addChannelName}
              onChange={(e) => {
                setChannel(e.target.value);
              }}
              minlength="3"
              maxlength="15"
              required
            ></input>
          </div>
          <div className="addChannel-form-createBtn">
            <button type="button" onClick={handleFormCreateChannelConfirmBtn}>Next</button>
          </div>
        </div>  
      </form>
    </div>
  );
};
export default AddChannel;
