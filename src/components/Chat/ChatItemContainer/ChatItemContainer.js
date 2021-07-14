import ChatItem from "../ChatItem/ChatItem"
import ChatItemWelcome from "../ChatItem/ChatItemWelcome"
import "./ChatItemContainer.scss"

const ChatItemContainer = ({chatData, receiverData, userData}) => {
  const chatItemList = chatData.length > 0
  ? chatData.map((data,index) => {
    return( <ChatItem key={index} data={data} /> )
  })
  : null

  return(
    <section className="chat_container-body">
      { 
        chatData.length > 0
        ? chatItemList
        : <ChatItemWelcome receiverData={receiverData} userData={userData}/> 
      }
    </section>
  )
}

export default ChatItemContainer