import "./ChatFooter.scss"
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
      .then(res => {
        //toggle render if success
        handleSetToggleRender()
      })
      .catch(err => console.log("Error Sending Message: ", err))
    
    setChatMessage("")
  }


  return(
    <section className="chat_container-footer">
      <form onSubmit={handleSendMessage}>
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