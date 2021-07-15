import "./ChatHeader.scss"
import { MdLock, MdErrorOutline } from "react-icons/md";
import { formatEmail } from "../../../helper/helper"
const ChatHeader = ({receiverData, chatType}) => {
  const email = receiverData ? receiverData.email : null

  return(
    <section className="chat_container-header">
      <div className="chat_container-header__label">
      {
        chatType === "new"
        ? <h3>New Message</h3>
        : <>
          <MdLock className="icon"/>
          <h3>{formatEmail(email)}</h3>  
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