import "./ChatFooter.scss"
import { MdSend } from "react-icons/md";
import { useState } from "react"
import { useParams } from "react-router-dom"
import { sendMessage } from "../../../api/api"
import { captalizeWord } from "../../../helper/helper"

const ChatFooter = ({headers, handleSetToggleRender}) => {

  const [chatMessage, setChatMessage] = useState("")

  //get parameter from URL
  const params = useParams()
  const { type, id } = params

  //input change handler
  const handleChatMessageInput = (event) => {
    setChatMessage(event.target.value)
  }
  // const headers = {
  //   token: "1uWV-u5L5TB7gs67ji2POg",
  //   client: "pmDD2Mv7__v66uV38mGAKQ",
  //   expiry: 1627418296,
  //   uid: "dolee2@example.com"
  // }

  const sendMessageObj = {
    receiver_id: parseInt(id),
    receiver_class: captalizeWord(type),
    body: chatMessage,
    headers: headers
  }

  const handleSendMessage = (event) => {
    event.preventDefault()
    //send Message API
    sendMessage(sendMessageObj)
    handleSetToggleRender()
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