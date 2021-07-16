import "./ChatItemWelcome.scss"
import { formatEmail } from "../../../helper/helper"

const ChatItemWelcome = ({receiverData, userData, type}) => {
  // const { id, email } = receiverData
  const loggedInUserId = userData.data.id

  const email = receiverData ? receiverData.email : null
  const id = receiverData.data ? receiverData.data.data.id : null
  const name = receiverData.data ? receiverData.data.data.name : null
  console.log("Chat Welcome", receiverData)
  // console.log("Chat Item Welcome Data", receiverData.data.data)
  return(
    <section className = "chat_container_welcome-item-wrapper">
      <div className="chat_container_welcome-item">
        <div className="chat_container_welcome-contents">
          <section className="chat_container_welcome-img">
            <img src={`https://picsum.photos/id/2/80`} /> 
          </section>
          <section className="chat_container_welcome-details">
            <div className="chat_details_welcome-name">
            {
              type === "user"
              ? <h1>{ email }</h1>
              : <h1>{ name }</h1>
            }
              
              <label></label>
            </div>
          </section>
        </div>
      </div>
      <div className="chat_details_welcome-body">
        {
          loggedInUserId === 2
          ? 
            <> 
              <strong>This is your space.</strong> Draft messages, list your to-dos, or keep links and files handy. You can also talk to yourself here, but please bear in mind you’ll have to supply both sides of the conversation.
            </>
          : 
            <>
              This is the very beginning of your direct message history with <label className="span-email"> @{email} </label>. Only the two of you are in this conversation, and no one else can join it.
            </>
        }
            
      </div>
    </section>
    
  )
}

export default ChatItemWelcome