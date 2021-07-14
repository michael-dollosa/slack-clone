import "./ChatContainer.scss"
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatFooter from "../ChatFooter/ChatFooter";
import ChatItemContainer from "../ChatItemContainer/ChatItemContainer";
import { useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMessage } from "../../../api/api"
import { captalizeWord } from "../../../helper/helper"
const ChatContainer = ({headers}) => {
  //declare state variable to put chat room data
  const [chatData, setChatData] = useState("")

  //get parameter from URL
  const { type, id } = useParams()

  //token of dolee2
  // const headers = {
  //   token: "1uWV-u5L5TB7gs67ji2POg",
  //   client: "pmDD2Mv7__v66uV38mGAKQ",
  //   expiry: 1627418296,
  //   uid: "dolee2@example.com"
  // }

  const sampleGetMessageObj = {
    receiver_id: parseInt(id),
    receiver_class: captalizeWord(type),
    headers: headers
  }

  useEffect(() => {
    //use getmessage API
    console.log(sampleGetMessageObj)
    getMessage(sampleGetMessageObj)
      .then(data => setChatData(data.data.data.reverse()))
      .catch(err  => console.log(err))
  }, [id])

  //condition to render only if object is populated
  if(!chatData.length || !chatData) return <></>
  
  return(
    <main className="chat_container-main">
        <ChatHeader />
        <ChatItemContainer  chatData={chatData}/>
        <ChatFooter />
    </main>
  )
}
 

export default ChatContainer