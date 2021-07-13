import "./ChatItem.scss"

const ChatItem = ({id, name, date, body}) => {
  id = 5;
  name = "Sample Name"
  date = "9:17 AM"
  body =  "Sample Message Sample Messsage Hellow Hi."
  return(
    <div className="chat_container-item">
      <div className="chat_container-contents">
        <section className="chat_container-img">
          <img src={`https://picsum.photos/id/${id}/40`} /> 
        </section>
        <section className="chat_container-details">
          <div className="chat_details-name">
            <h1>{ name }</h1>
            <label>{ date }</label>
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
