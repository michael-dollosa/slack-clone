import "./ChatItem.scss"
import React  from 'react';
import Moment from 'react-moment'

const ChatItem = ({data}) => {
  
  const { body, created_at, sender: {id, email} } = data
  
  return(
    <div className="chat_container-item">
      <div className="chat_container-contents">
        <section className="chat_container-img">
          <img src={`https://picsum.photos/id/${id}/40`} alt=""/> 
        </section>
        <section className="chat_container-details">
          <div className="chat_details-name">
            <h1>{email}</h1>
            <label><Moment fromNow ago date={created_at} /> ago</label>
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