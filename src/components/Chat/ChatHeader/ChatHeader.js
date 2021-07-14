import "./ChatHeader.scss"
import { MdLock, MdErrorOutline } from "react-icons/md";

const ChatHeader = ({recieverData}) => {
  const { email } = recieverData

  return(
    <section className="chat_container-header">
      <div className="chat_container-header__label">
        <MdLock className="icon"/>
        <h3>{email}</h3>  
      </div>

      <div className="chat_container-header__icon">
        <MdErrorOutline className="icon"/>
        <h3>Details</h3>
      </div>
    </section>
  )
}

export default ChatHeader