import "./ChatItemWelcome.scss"

const ChatItemWelcome = ({receiverData, userData, type}) => {
  const loggedInUserId = userData.data.id
  const email = receiverData ? receiverData.email : null
  const receiverUserId = receiverData ? receiverData.id : null
  const receiverChannelId = (receiverData && receiverData.data) ? receiverData.data.data.id : null
  const name = (receiverData && receiverData.data) ? receiverData.data.data.name : null

  return(
    <section className = "chat_container_welcome-item-wrapper">
      <div className="chat_container_welcome-item">
        <div className="chat_container_welcome-contents">
          <section className="chat_container_welcome-img">
          {
            type === "user"
            ? <img src={`https://picsum.photos/id/${receiverUserId}/80`} alt=""/> 
            : <img src={`https://picsum.photos/id/${receiverChannelId}/80`} alt=""/> 
          }
            
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
          type === "user"
          ? loggedInUserId === receiverUserId
            ? <> 
                <strong>This is your space.</strong> Draft messages, list your to-dos, or keep links and files handy. You can also talk to yourself here, but please bear in mind you’ll have to supply both sides of the conversation.
              </>
            :
              <>
                This is the very beginning of your direct message history with <label className="span-email"> @{email} </label>. Only the two of you are in this conversation, and no one else can join it.
              </>
          : <>
              This is the very beginning of your direct message history in <label className="span-email"> #{name} </label>. Only the members of this channel can see the messages.
            </>
        }
            
      </div>
    </section>
    
  )
}

export default ChatItemWelcome