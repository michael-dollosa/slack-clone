import { useState } from "react";
import "./AddChannel.scss";
import { IoCloseOutline } from "react-icons/io5";
import { createChannel } from "../../api/api";
import AddUser from "../../forms/AddUser/AddUser";
import Add from "@material-ui/icons/Add";

const AddChannel = ({ headers, handleDummyAddChannel, handleClose }) => {
  const [addChannelName, setChannel] = useState("");
  const [addMembers, setMembers] = useState("");
  const [formToggle, setFormToggle] = useState(false);
  const [addUserToggle, setAddUserToggle] = useState(false);

  const showAddUser = () => {
    setAddUserToggle(!addUserToggle);
  };

  const handleFormToggle = () => {
    if (addChannelName === "") return;
    setFormToggle(!formToggle);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // const addNewChannel = {
    //   name: addChannelName,
    //   user_ids: parseInt(addMembers),
    //   headers: headers,
    // };
    // console.log(addNewChannel);
    // createChannel(addNewChannel)
    //   .then((res) => {
    //     console.log("Add channel success", res);
    //     handleDummyAddChannel();
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div
      className={
        formToggle
          ? `addChannel-form-container addChannel-hidden`
          : `addChannel-form-container addChannel-block`
      }
    >
      <form className="addChannel-form" onSubmit={onSubmit}>
        <div
          className={
            formToggle
              ? `addChannel-form-items addChannel-hidden`
              : `addChannel-form-items addChannel-block`
          }
        >
          <div
            className={
              formToggle
                ? `addChannel-form-header addChannel-hidden`
                : `addChannel-form-header addChannel-block`
            }
          >
            <div className="addChannel-closeBtn">
              <IoCloseOutline onClick={handleClose} />
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
          <div
            className={
              formToggle
                ? `addChannel-form-input addChannel-hidden`
                : `addChannel-form-input addChannel-block`
            }
          >
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
            <button onClick={handleFormToggle}>Create</button>
          </div>
          <div
            className={
              formToggle
                ? `addUser-container addChannel-block`
                : `addUser-container addChannel-hidden`
            }
          >
            <AddUser />
          </div>
        </div>
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
