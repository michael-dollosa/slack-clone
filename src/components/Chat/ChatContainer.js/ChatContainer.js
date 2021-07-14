import "./ChatContainer.scss"
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatFooter from "../ChatFooter/ChatFooter";
import ChatItemContainer from "../ChatItemContainer/ChatItemContainer";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMessage, getSpecificUser } from "../../../api/api"
import { captalizeWord } from "../../../helper/helper"
const ChatContainer = ({headers, userDetails}) => {
  //declare state variable to put chat room data
  const [chatData, setChatData] = useState("")
  //declare state to get specific reciever details
  const [receiverData, setReceiverData] = useState("")
  const [toggleRender, setToggleRender] = useState(false)

  //set handler for toggleRender
  const handleSetToggleRender = () => {
    setToggleRender(!toggleRender)
  }
  //get parameter from URL
  const params = useParams()
  const { type, id } = params

  const sampleGetMessageObj = {
    receiver_id: parseInt(id),
    receiver_class: captalizeWord(type),
    headers: headers
  }

  const getSpecificUserObj = {
    id: parseInt(id),
    headers: headers
  }
  useEffect(() => {
    //use getmessage API
    getMessage(sampleGetMessageObj)
      .then(data => setChatData(data.data.data.reverse()))
      .catch(err  => console.log(err))
    //get receiver data
    getSpecificUser(getSpecificUserObj)
      .then(data => {setReceiverData(data[0])})
  }, [id, toggleRender])

  //condition to render only if object is populated
  // if(!chatData.length || !chatData) return <h1>Hello WOrld</h1>
  if(!receiverData) return <></>

  return(
    <main className="chat_container-main">
        <ChatHeader receiverData={receiverData} />
        <ChatItemContainer  chatData={chatData} receiverData={receiverData} userData={userDetails}/>
        <ChatFooter headers={headers} handleSetToggleRender={handleSetToggleRender}/>
    </main>
  )
}
 

export default ChatContainer