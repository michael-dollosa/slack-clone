import { searchUser, registerUser, userLogin, sendMessage, getMessage, createChannel, getChannels, getChannelDetail, addMemberToChannel, getAllUsers } from "./api/api"
import { useState, useEffect } from "react"

const ApiTestPage = () => {

  //hardcoded header for tests. But for the application, we should get the header parameter from the login return data.
  //take note of the "key" => it should match the name of the keys that are expected as parameter of the API function
  const headers = {
    token: "PIj6UEKNzUX7yJqbVfyk2g",
    client: "j7uq8--cOJN32bBEfpOoug",
    expiry: 1627559290,
    uid: "testnochannel@example.com"
  }

  //state for handling input
  const [searchInput, setSearchInput] = useState("")

  const searchObj = {
    str: searchInput,
    headers: headers
  }

  useEffect(() => {
    searchUser(searchObj)
      .then(res => console.log("search response: ", res))
      .catch(err => console.log("search error: ", err))
  })

  

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  const handleLogin = () => {
    //test hardcoded credentials
    const loginObject = {
      email: "dolee@example.com",
      password: "test12345"
    }
    
    //although we made API functions reusable, each function STILL returns a promise. So if we want to set it to a state, or even console.log the data, we need to do it INSIDE the then.

    //Or you may use async-await
    // userLogin(loginObject)
    //   .then(res => console.log("Login Data", res))
    console.log(userLogin(loginObject))
    
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

      <input type="text" value={searchInput} onChange={event => handleSearchInput(event)} />
    </div>
  )
}
export default ApiTestPage
