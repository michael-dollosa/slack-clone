import "./ChatHeader.scss"
import { MdLock, MdErrorOutline } from "react-icons/md";
import { formatEmail } from "../../../helper/helper"
const ChatHeader = ({receiverData, chatType, type}) => {
  const email = (receiverData && ( type==="user" ) ) ? receiverData.email : ""
  // const email = receiverData
  //               ? type === "user"
  //                 ? receiverData.email
  //                 : null
  //               : null
  const name = (receiverData && receiverData.data) ? receiverData.data.data.name : null

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

      <div className="chat_container-header__icon">
        <MdErrorOutline className="icon"/>
        <h3>Details</h3>
      </div>
    </section>
  )
}

export default ChatHeader