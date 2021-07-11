import { registerUser, userLogin, sendMessage, getMessage, createChannel, getChannels, getChannelDetail, addMemberToChannel, getAllUsers } from "./api/api"
import { useState } from "react"

const ApiTestPage = () => {

  //hardcoded header for tests. But for the application, we should get the header parameter from the login return data.
  //take note of the "key" => it should match the name of the keys that are expected as parameter of the API function
  const headers = {
    token: "vTbXQNoxmh0lS56FUm-Edg",
    client: "jHFYPMzZW8o1qNH_Yuf19g",
    expiry: "1627036215",
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
    const channelObject = {
      token: "PFgDY82gKS4Z943bmQQ7kQ",
      client: "LkZEDhf28EpfxOM-EIYHww",
      expiry: 1627215796,
      uid: "steph@gmail.com"
    }
    getChannels(channelObject)
    .then(response => console.log("All Channels:", response))
  }

  return(
    <div>
      <button onClick={handleLogin}>Test Login API</button>
      <br />
      <button onClick={handleGetAllUsers}>Test Get All Users API</button>
      <br />
      <button onClick={handleChannels}>Channels</button>
    </div>
  )
}

export default ApiTestPage