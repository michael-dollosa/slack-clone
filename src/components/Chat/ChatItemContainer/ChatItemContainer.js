import ChatItem from "../ChatItem/ChatItem"
import ChatItemWelcome from "../ChatItem/ChatItemWelcome"
import "./ChatItemContainer.scss"

const ChatItemContainer = ({chatData, recieverData, userData}) => {

  const chatItemList = chatData
  ? chatData.map((data,index) => {
    return( <ChatItem key={index} data={data} /> )
  })
  : null

  return(
    <section className="chat_container-body">
      {
        chatData === null
        ? { chatItemList }
        : null
      }

      <ChatItemWelcome recieverData={recieverData} userData={userData}/>
    </section>
  )
}

export default ChatItemContainer