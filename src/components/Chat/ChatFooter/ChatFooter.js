import "./ChatFooter.scss"
import { MdSend } from "react-icons/md";

const ChatFooter = () => {

  return(
    <section className="chat_container-footer">
      <form>
        {/*<button type="submit">
          <MdSend className="chat_container-send" />
          </button>*/}
        <input 
          type="text" 
          placeholder="Message User"
        />
      </form>
    </section>
  )
}

export default ChatFooter