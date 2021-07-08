import "./ChatHeader.scss"
import { MdLock } from "react-icons/md";

const ChatHeader = () => {

  return(
    <section className="chat_container-header">
      <div className="chat_container-header__label">
        <MdLock className="icon"/>
        <h3>batch-9</h3>  
      </div>

      <div className="chat_container-header__icon">
        <h3>Sample Icon</h3>
      </div>
    </section>
  )
}

export default ChatHeader