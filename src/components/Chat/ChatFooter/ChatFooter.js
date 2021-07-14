import "./ChatFooter.scss"
import { MdSend } from "react-icons/md";
import { useState, useEffect } from "react"
import { sendMessage } from "../../../api/api"

const ChatFooter = () => {

  const [chatMessage, setChatMessage] = useState("")

  //input change handler
  const handleChatMessageInput = (event) => {
    setChatMessage(event.target.value)
  }
  const headers = {
    token: "1uWV-u5L5TB7gs67ji2POg",
    client: "pmDD2Mv7__v66uV38mGAKQ",
    expiry: 1627418296,
    uid: "dolee2@example.com"
  }

  const sendMessageObj = {
    receiver_id: 5,
    receiver_class: "User",
    body: chatMessage,
    headers: headers
  }

  const handleSendMessage = (event) => {
    event.preventDefault()
    //send Message API
    sendMessage(sendMessageObj)
    setChatMessage("")

  }


  return(
    <section className="chat_container-footer">
      <form onSubmit={handleSendMessage}>
        {/*<button type="submit">
          <MdSend className="chat_container-send" />
          </button>*/}
        <input 
          type="text" 
          placeholder="Message User"
          value={chatMessage}
          onChange={ (event) => handleChatMessageInput(event)}
        />
      </form>
    </section>
  )
}

export default ChatFooter