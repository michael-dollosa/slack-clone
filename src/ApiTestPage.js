import { registerUser, userLogin, sendMessage, getMessage, createChannel, getChannels, getChannelDetail, addMemberToChannel, getAllUsers } from "./api/api"
import { useState } from "react"

const ApiTestPage = () => {

  //hardcoded header for tests. But for the application, we should get the header parameter from the login return data.
  //take note of the "key" => it should match the name of the keys that are expected as parameter of the API function
  const headers = {
    token: "3kV4gM7BW2vZf-z9S5uQ2A",
    client: "XZ0OzNSZhjehbS9qQ3ffyQ",
    expiry: 1627298670,
    uid: "dolee@example.com"
  }

  const handleLogin = () => {
    //test hardcoded credentials
    const loginObject = {
      email: "dolee@example.com",
      password: "test12345"
    }
    
    //although we made API functions reusable, each function STILL returns a promise. So if we want to set it to a state, or even console.log the data, we need to do it INSIDE the then.

    //Or you may use async-await
    userLogin(loginObject)
      .then(res => console.log("Login Data", res))
    
      //if we want to set it to a state it should be: .then(response => setState(response))
  }

  const handleGetAllUsers = () => {
    getAllUsers(headers)
      .then(response => console.log("All Users:", response))
  }

  const handleChannels = () => {
    
    getChannels(headers)
    .then(response => console.log("All Channels:", response.data.data))
  }

  const handleCreateChannel = () => {
    console.log("headers", headers)
    const createChannelObj = {
      name: "Dolee Channel 3",
      user_ids: [128, 129, 130],
      headers: headers
    }
    createChannel(createChannelObj)
      .then(res  => console.log(res))
      .catch(err => console.log(err))
  }

  const handleGetChannelDetails = () => {
    const channelDetailsObj = {
      id: 67,
      headers: headers
    }
    getChannelDetail(channelDetailsObj)
      .then(res => console.log("Channel Details",res))
      .catch(err  => console.log(err))
  }

  const handleGetMessage = () => {
    const messageParams = {
      receiver_id: 128,
      receiver_class: "User",
      headers: headers
    }
    getMessage(messageParams)
      .then(res => console.log("Get Message", res))
      .catch(err => console.log(err))
  }
  return(
    <div>
      <button onClick={handleLogin}>Test Login API</button>
      <br />
      <button onClick={handleGetAllUsers}>Test Get All Users API</button>
      <br />
      <button onClick={handleChannels}>Channels</button>
      <br />
      <button onClick={handleCreateChannel}>Create Channel</button>
      <br />
      <button onClick={handleGetChannelDetails}>Get Channel Details </button>
      <br />
      <button onClick={handleGetMessage}> Get Message</button>
    </div>
  )
}
export default ApiTestPage
