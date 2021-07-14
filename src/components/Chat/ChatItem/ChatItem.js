import "./ChatItem.scss"
import { parseDateTime } from "../../../helper/helper"
const ChatItem = ({data}) => {
  
  const { body, created_at, sender: {id, email} } = data
  const { parsedDate, parsedTime } = parseDateTime(created_at)
  
  return(
    <div className="chat_container-item">
      <div className="chat_container-contents">
        <section className="chat_container-img">
          <img src={`https://picsum.photos/id/${id}/40`} /> 
        </section>
        <section className="chat_container-details">
          <div className="chat_details-name">
            <h1>{ email }</h1>
            <label>{ parsedDate } at { parsedTime }</label>
          </div>
          <div className="chat_details-body">
            { body }
          </div>
        </section>
      
      </div>
    </div>
  )
}

export default ChatItem