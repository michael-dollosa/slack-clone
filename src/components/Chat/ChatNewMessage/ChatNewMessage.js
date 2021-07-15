import "./ChatNewMessage.scss"
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatFooter from "../ChatFooter/ChatFooter";
import ChatItemContainer from "../ChatItemContainer/ChatItemContainer";


const ChatNewMessage = ({headers , userDetails}) => {


  return(
    <div>
      <main className="chat_container-main">
        <ChatHeader chatType="new" />
        <ChatItemContainer  />
        <ChatFooter />
      </main>
    </div>
  )
}

export default ChatNewMessage