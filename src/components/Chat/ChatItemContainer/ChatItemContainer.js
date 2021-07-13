import ChatItem from "../ChatItem/ChatItem"
import "./ChatItemContainer.scss"

const ChatItemContainer = ({chatData}) => {
  const chatItemList = chatData.reverse().map((data,index) => {
    return(
      <ChatItem key={index} data={data}/>
    )
  })
  return(
    <section className="chat_container-body">
      {chatItemList}
    </section>
  )
}

export default ChatItemContainer
