import ChatItem from "../ChatItem/ChatItem"
import "./ChatItemContainer.scss"

const ChatItemContainer = () => {

  return(
    <section className="chat_container-body">
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </section>
  )
}

export default ChatItemContainer