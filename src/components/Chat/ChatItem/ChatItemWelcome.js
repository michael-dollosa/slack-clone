import "./ChatItemWelcome.scss"
import { formatEmail } from "../../../helper/helper"

const ChatItemWelcome = ({receiverData, userData}) => {
  const { id, email } = receiverData
  const loggedInUserId = userData.data.id
  
  return(
    <section className = "chat_container_welcome-item-wrapper">
      <div className="chat_container_welcome-item">
        <div className="chat_container_welcome-contents">
          <section className="chat_container_welcome-img">
            <img src={`https://picsum.photos/id/${id}/80`} /> 
          </section>
          <section className="chat_container_welcome-details">
            <div className="chat_details_welcome-name">
              <h1>{ formatEmail(email) }</h1>
              <label></label>
            </div>
          </section>
        </div>
      </div>
      <div className="chat_details_welcome-body">
        {
          loggedInUserId === id
          ? 
            <> 
              <strong>This is your space.</strong> Draft messages, list your to-dos, or keep links and files handy. You can also talk to yourself here, but please bear in mind you’ll have to supply both sides of the conversation.
            </>
          : 
            <>
              This is the very beginning of your direct message history with <label className="span-email"> @{formatEmail(email)} </label>. Only the two of you are in this conversation, and no one else can join it.
            </>
        }
            
      </div>
    </section>
    
  )
}

export default ChatItemWelcome