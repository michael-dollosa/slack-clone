import "./ChatContainer.scss"
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatFooter from "../ChatFooter/ChatFooter";
import ChatItemContainer from "../ChatItemContainer/ChatItemContainer";

const ChatContainer = () => {


  return(
    <main className="chat_container-main">
      <ChatHeader />
      <ChatItemContainer />
      <ChatFooter />
    </main>
  )
}

export default ChatContainer