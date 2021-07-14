import "./ChatItem.scss"

const ChatItem = ({data}) => {
  //id = 5;
  //name = "Sample Name"
  //date = "9:17 AM"
  //body =  "Sample Message Sample Messsage Hellow Hi."

  //data structure
  //{ body, created_at, sender: {email} }
  const { body, created_at, sender: {id, email} } = data
  // console.log(typeof(created_at)) //2021-07-13T12:18:22.646Z
  return(
    <div className="chat_container-item">
      <div className="chat_container-contents">
        <section className="chat_container-img">
          <img src={`https://picsum.photos/id/${id}/40`} /> 
        </section>
        <section className="chat_container-details">
          <div className="chat_details-name">
            <h1>{ email }</h1>
            <label>{ created_at }</label>
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
