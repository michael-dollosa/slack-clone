import { useState } from "react";
import "./AddChannel.scss";
import { IoCloseOutline } from "react-icons/io5";
import { createChannel } from "../../api/api";
import AddUser from "../../forms/AddUser/AddUser";
import { useHistory } from "react-router-dom"

const AddChannel = ({ headers, handleDummyAddChannel, handleClose, toggleAddChannel }) => {
  const [addChannelName, setChannel] = useState("");
  const [addMembers, setMembers] = useState("");
  const [formCreateChannelToggle, setFormCreateChannelToggle] = useState(false);
  const [formAddUserToggle, setFormAddUserToggle] = useState(false)
  const [addUserToggle, setAddUserToggle] = useState(false);
  const [getUserArr, setGetUserArr] = useState([])

  //used to push to URL of created channel upon success
  const history = useHistory()

  const handlesetGetUserArr = (usersToBeAdded) => {
    const pullUserId = usersToBeAdded.map(user => user.id)
    console.log("inside add channel: ", pullUserId)
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
    setFormCreateChannelToggle(!formCreateChannelToggle);
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
    console.log("On Submit Triggered")
  
    const addNewChannel = {
      name: addChannelName,
      user_ids: getUserArr,
      headers: headers,
    };
    console.log(addNewChannel);
    createChannel(addNewChannel)
      .then((res) => {
        console.log("Add channel success", res);
        const channelId = res.data.data.id
        handleFormSubmitToggle()
        //push to URL of Channel
        history.push(`/channel/${channelId}`)
      })
      .catch((err) => console.log(err));
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

        <div
          className={
            formAddUserToggle
              ? `addUserForm-container addChannel-block`
              : `addUserForm-container addChannel-hidden`
          }
        >
        <AddUser headers={headers} handleFormAddUserExit={handleFormAddUserExit} handlesetGetUserArr={handlesetGetUserArr}/>
        </div>

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
            <h1>Create a private channel</h1>
          </div>
          <h5>
            <span>
              Channels are where your team communicates. They're best when
              <br />
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
            ></input>
          </div>
          
          <div className="addChannel-form-createBtn">
            <button type="button" onClick={handleFormCreateChannelConfirmBtn}>Create</button>
          </div>
        </div>  
        
        
        
        
          {/*
            Add User
          <div
            className={
              formToggle
                ? `addUser-container addChannel-block`
                : `addUser-container addChannel-hidden`
            }
          >
            <AddUser />
          </div>
          */}
        
      </form>
    </div>
    //main container
    // <div className="addChannel-form-container">
    //   {/* add channel container */}
    //   <div className="addChannel-form-items">
    //     <div
    //       className=
    //         { formToggle ? `addChannel-form-header addChannel-hidden`
    //           : `addChannel-form-header addChannel-block`}>
    //       <div className="addChannel-closeBtn">
    //         <IoCloseOutline onClick={handleClose} />
    //       </div>
    //       <h1>Create a private channel</h1>
    //     </div>
    //     <h5
    //       className={
    //         formToggle
    //           ? `addChannel-form-text addChannel-hidden`
    //           : `addChannel-form-text addChannel-block`
    //       }
    //     >
    //       <span>
    //         Channels are where your team communicates. They're best when <br />
    //         organized around a topic — #marketing, for example.
    //       </span>
    //     </h5>
    //     {/* <div
    //       ClassName={
    //         formToggle
    //           ? `addChannel-form-header addChannel-hidden`
    //           : `addChannel-form-header  addChannel-block`
    //       }
    //     >
    //       <h2>Add people</h2>
    //       <h6>{addChannelName}</h6>
    //     </div> */}
    //     <form onSubmit={onSubmit}>
    //       <div
    //         className={
    //           formToggle
    //             ? `addChannel-form addChannel-hidden`
    //             : `addChannel-form addChannel-block`
    //         }
    //       >
    //         <label htmlFor="text">
    //           <h3>Name</h3>
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="e.g. plan-budget"
    //           value={addChannelName}
    //           onChange={(e) => {
    //             setChannel(e.target.value);
    //           }}
    //         ></input>
    //       </div>
    //       <div
    //         className={
    //           formToggle
    //             ? `addChannel-form-btn addChannel-hidden`
    //             : `addChannel-form-btn addChannel-block`
    //         }
    //       >
    //         <button className="btn" onClick={handleFormToggle}>
    //           <h3>Create</h3>
    //         </button>
    //       </div>
    //       {/* <div
    //         className={
    //           formToggle
    //             ? `addChannel-form addChannel-block`
    //             : `addChannel-form addChannel-hidden`
    //         }
    //       >
    //         <label htmlFor="text">
    //           <h4>Add members</h4>
    //         </label>
    //         <input
    //           type="number"
    //           value={addMembers}
    //           onChange={(e) => {
    //             setMembers(e.target.value);
    //           }}
    //         ></input>
    //         <div
    //           className={
    //             formToggle
    //               ? `addChannel-form-btn addChannel-hidden`
    //               : `addChannel-form-btn addChannel-block`
    //           }
    //         >
    //           <button className="btn">
    //             <h3>Add</h3>
    //           </button>
    //         </div>
    //       </div> */}
    //     </form>
    //   </div>
    // </div>
  );
};
export default AddChannel;
