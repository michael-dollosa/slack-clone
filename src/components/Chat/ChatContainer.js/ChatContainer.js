import "./ChatContainer.scss"
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatFooter from "../ChatFooter/ChatFooter";
import ChatItemContainer from "../ChatItemContainer/ChatItemContainer";
import { useParams } from "react-router-dom"

const ChatContainer = () => {
  //const params = useParams() || ""
  //console.log(params)

  return(
    <main className="chat_container-main">
      <ChatHeader />
      <ChatItemContainer />
      <ChatFooter />
    </main>
  )
}

export default ChatContainer
