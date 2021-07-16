import { useState } from "react";
import "./AddChannel.scss";
import { IoCloseOutline } from "react-icons/io5";
import { createChannel } from "../../api/api";
import AddUser from "../../forms/AddUser/AddUser";
<<<<<<< HEAD
=======
import Add from "@material-ui/icons/Add";
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b

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

  const addNewChannel = {
    name: addChannelName,
    user_ids: parseInt(addMembers),
    headers: headers,
  };
  console.log(addNewChannel);

  const onSubmit = (e) => {
    e.preventDefault();

    createChannel(addNewChannel)
      .then((res) => {
        console.log("Add channel success", res);
        handleDummyAddChannel();
      })
      .catch((err) => console.log(err));
  };

  return (
<<<<<<< HEAD
    <div className="addChannel-form-container">

      <form className="addChannel-form" onSubmit={onSubmit}>

        <div className="addChannel-form-items">

          <div className="addChannel-form-header">
=======
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
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
            <div className="addChannel-closeBtn">
              <IoCloseOutline onClick={handleClose} />
            </div>
            <h1>Create a private channel</h1>
          </div>
<<<<<<< HEAD

          <h5>
            <span>
              Channels are where your team communicates. They’re best when <br />
              organized around a topic — #marketing, for example.
            </span>
        </h5>

        <div className="addChannel-form-input">
        <h3>Name</h3>
        <input type="text" placeholder="e.g. plan-budget" 
        value={addChannelName} onChange={(e) => {setChannel(e.target.value)}}
        ></input>
        </div>

        <div className="addChannel-form-createBtn">
          <button onClick={handleFormToggle}>Create</button>
        </div>

        </div>

          {/* <AddUser /> */}


      </form>
    </div>

=======
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
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
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
<<<<<<< HEAD
          
          
    //     </div>

=======
    //     </div>
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
    //     <h5
    //       className={
    //         formToggle
    //           ? `addChannel-form-text addChannel-hidden`
    //           : `addChannel-form-text addChannel-block`
    //       }
    //     >
    //       <span>
<<<<<<< HEAD
    //         Channels are where your team communicates. They’re best when <br />
    //         organized around a topic — #marketing, for example.
    //       </span>
    //     </h5>

=======
    //         Channels are where your team communicates. They're best when <br />
    //         organized around a topic — #marketing, for example.
    //       </span>
    //     </h5>
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
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
<<<<<<< HEAD

=======
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
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
<<<<<<< HEAD

=======
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
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
<<<<<<< HEAD

=======
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
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
<<<<<<< HEAD
  )
=======
  );
>>>>>>> ae9ed18441f189b47bddaa68983ea41e0120bd3b
};
export default AddChannel;
