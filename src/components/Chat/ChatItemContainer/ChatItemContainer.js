import ChatItem from "../ChatItem/ChatItem"
import ChatItemWelcome from "../ChatItem/ChatItemWelcome"
import "./ChatItemContainer.scss"

const ChatItemContainer = ({chatData, receiverData, userData, type}) => {
  console.log(userData.data.id)
  console.log("chat data", chatData)
  const chatItemList = chatData.length > 0
  ? chatData.map((data,index) => {
    return( <ChatItem key={index} data={data} /> )
  })
  // ? chatData.filter((v,i,a) => a.findIndex(t=>(t.id===v.id))===i)
  : null

  return(
    <section className="chat_container-body">
      { 
        chatData.length > 0
        ? chatItemList
        : <ChatItemWelcome receiverData={receiverData} userData={userData} type={type}/> 
      }
    </section>
  )
}

export default ChatItemContainer