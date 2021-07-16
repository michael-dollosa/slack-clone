import "./ChatHeader.scss"
import { MdLock, MdErrorOutline } from "react-icons/md";

const ChatHeader = ({receiverData, chatType, type}) => {
  const email = receiverData ? receiverData.email : null
  const name = (receiverData && receiverData.data) ? receiverData.data.data.name : null
  console.log("Chat Header", email)
  return(
    <section className="chat_container-header">
      <div className="chat_container-header__label">
      {
        chatType === "new"
        ? <h3>New Message</h3>
        : type === "user"
          ? <>
            <MdLock className="icon"/>  
            <h3>{email}</h3>  
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