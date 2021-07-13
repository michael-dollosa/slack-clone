import "./ChatContainer.scss"
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatFooter from "../ChatFooter/ChatFooter";
import ChatItemContainer from "../ChatItemContainer/ChatItemContainer";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMessage } from "../../../api/api"

const ChatContainer = () => {
  //declare state variable to put chat room data
  const [chatData, setChatData] = useState("")
  //const params = useParams() || ""
  //console.log(params)

  //token of dolee2
  const headers = {
    token: "1uWV-u5L5TB7gs67ji2POg",
    client: "pmDD2Mv7__v66uV38mGAKQ",
    expiry: 1627418296,
    uid: "dolee2@example.com"
  }

  const sampleGetMessageObj = {
    receiver_id: 5,
    receiver_class: "User",
    headers: headers
  }

  
  useEffect(() => {
    //use getmessage API
    getMessage(sampleGetMessageObj)
      .then(data => setChatData(data.data.data))
      .catch(err  => console.log(err))
  },[])

  //condition to render only if object is populated
  if(!chatData.length || !chatData) {
    return <> Loading </>
  }
  
  else{ return(
    <main className="chat_container-main">
      <ChatHeader />
        <ChatItemContainer  chatData={chatData}/>
        <ChatFooter />
    </main>
      )
  }
 }

export default ChatContainer
