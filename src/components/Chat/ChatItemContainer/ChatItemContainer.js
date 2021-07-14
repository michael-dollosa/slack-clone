import ChatItem from "../ChatItem/ChatItem"
import "./ChatItemContainer.scss"

const ChatItemContainer = ({chatData}) => {
  const chatItemList = chatData.map((data,index) => {
    const date = new Date(data.created_at)
    console.log(date)
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
