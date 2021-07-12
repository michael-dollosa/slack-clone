import ChatContainer from "../components/Chat/ChatContainer.js/ChatContainer"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import { getChannels  } from "../api/api"
import { useState, useEffect } from "react"

import "./Main.scss"

const Main = () => {

  //declare states for application data
  const [userChannels, setUserChannels] = useState("") //state to get channel data
  const [userList, setUserList] = useState("") //state to get user Lists/ users that have messaged current user and/or was messaged by current user

  //declare hardcoded header value of current user
  //this must be replaced by a prop that is passed down from App component when user logs in
  const headers = {
    token: "3ZVex1ETsRdTogvYmpiFWg",
    client: "g_ROZIPQh81n1inu9YjSaQ",
    expiry: "1627242554",
    uid: "dolee@example.com"
  }

  useEffect(() => {
    //trigger getChannel API to get list of channels for current user
    getChannels(headers)
      .then(data => setUserChannels(data))
      .catch(err => console.log("Get Channel Function Error:", err))

    //trigger userApi for private message user list

  }, [])


  //render

  //always have a condition to render a Loading state
  //since we are using API which is asynchronus, components will mount even without the data. Since our components uses data, we need first to set a condition to render nothing while data is being populated
  //if we don't do this, our components will have an error -> usually error regarding no data, or data in the variable being used is undefined
  if(!userChannels.data || !userChannels.data.data.length){
    return(<h1>Loading</h1>)
  }
  
  return(
    <main className="main-container">
      <header>
        <Header />
      </header>
    
      <nav>
        <Sidebar channels={userChannels}/>
      </nav>
    
      <section>
          <ChatContainer />
      </section>
    </main>
  )
  
}

export default Main