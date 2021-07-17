import "./ChatHeader.scss"
import { MdLock, MdErrorOutline } from "react-icons/md";
import { formatEmail } from "../../../helper/helper"
import { FaUserEdit } from "react-icons/fa";
import AddUser from "../../../forms/AddUser/AddUser";
import { useState } from "react"
import { addMemberToChannel } from "../../../api/api"
const ChatHeader = ({receiverData, chatType, type, headers, handleSetToggleRender}) => {
  const email = (receiverData && ( type==="user" ) ) ? receiverData.email : ""
  const name = (receiverData && receiverData.data) ? receiverData.data.data.name : null
  const currentUsers = (receiverData && receiverData.data) 
                        ? receiverData.data.data.channel_members.length 
                          ? receiverData.data.data.channel_members.map(currentUsers => { return { id: currentUsers.user_id} })
                          : null
                        : null
  const channelId = (receiverData && receiverData.data) ? receiverData.data.data.id : null
  const [getAdditionalMembers, setGetAdditionalMembers] = useState([])
  const [toggleAddMembers, setToggleAddMembers] = useState(false)

  console.log("receiver data",typeof(channelId))
  const handleSetGetAdditionalMembers = (additionalMembersArray) => {
    
    // const tempAdditionalMembersArray = [...additionalMembersArray, ...getAdditionalMembers]
    // console.log("Channel Header", tempAdditionalMembersArray)
    console.log("inside header",additionalMembersArray)
    setGetAdditionalMembers(additionalMembersArray)
  }

  const handleToggleAddMembers = () => {
    console.log('handleToggleAddMembers', toggleAddMembers)
    setToggleAddMembers(!toggleAddMembers)
  }
  
  const handleSubmitAddMembers = () => {
    //close component
    setToggleAddMembers(false)
    getAdditionalMembers.map(additionalUser => {
      let obj = {
        id: channelId,
        member_id: additionalUser.id,
        headers
      }

      //iterate every user and use API to add them one by one
      addMemberToChannel(obj)
        .then(res => {
          console.log("added user success", res)
          handleSetToggleRender()
        })
        .catch(err => console.log(err))
    })

  }
  if(email === undefined ) return <></>
  return(
    <section className="chat_container-header">

      <div className="chat_container-header__label">
      {
        chatType === "new"
        ? <h3>New Message</h3>
        : type === "user"
          ? <>
            <MdLock className="icon"/>  
              <h3>{formatEmail(email)}</h3> 
            </>
          : <>
            <MdLock className="icon"/>  
              <h3>{name}</h3>  
            </>
      }
      </div>

      <div className="chat_container-header__icon" onClick={ type === "channel" ? handleToggleAddMembers : null}>
      {
        type !== "channel"
        ? <>
          <MdErrorOutline className="icon"/>
          </>
        : <>
          <FaUserEdit className="icon"/>
          <h3>Add Members</h3>
          </>
      }
        
      </div>
  
      {
        toggleAddMembers
        ? <section className="addmember-container">
            <AddUser 
              receiverData={receiverData}
              handlesetGetUserArr={handleSetGetAdditionalMembers}
              headers={headers}
              currentUsers={currentUsers}
              handleFormAddUserExit={handleToggleAddMembers}
              handleSubmitAddMembers={handleSubmitAddMembers}
            />
          </section>
        : null
      }
    
    
    </section>
  )

}

export default ChatHeader