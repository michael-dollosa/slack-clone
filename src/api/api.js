import axios from "axios"

//user registration
export const registerUser = ({ email, password, password_confirmation }) => {
  return axios.post("http://206.189.91.54//api/v1/users", {
    email,
    password,
    password_confirmation
  })
  .then(response => response)
  .then(result => result)
  .catch(error => error)
}

//login
export const userLogin = ({ email, password }) => {
  return axios.post("http://206.189.91.54//api/v1/auth/sign_in", {
    email,
    password
  })
  .then(response => response)
  .then(result => result)
  .catch(error => error)
}

//send message
export const sendMessage = ({ receiver_id, receiver_class, body, headers:{ token, client, expiry, uid } }) => {
  axios.post(
    "http://206.189.91.54//api/v1/messages", 
  {
    receiver_id,
    receiver_class,
    body
  },
  {
    headers:{
      "access-token": token,
      "client": client,
      "expiry": expiry,
      "uid": uid,
    }
  })
  .then(response => response)
  .then(result => result)
  .catch(error => error)
}

//get messages
export const getMessage = ({ receiver_id, receiver_class, headers:{ token, client, expiry, uid } }) => {
  return axios.get(
    "http://206.189.91.54//api/v1/messages",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      },
      params: {
        receiver_id,
        receiver_class
      }
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}

//create channel
export const createChannel = ({ name, user_ids, headers:{ token, client, expiry, uid } }) => {
  return axios.post(
    "http://206.189.91.54//api/v1/channels", 
  {
    name,
    user_ids
  },
  {
    headers:{
      "access-token": token,
      "client": client,
      "expiry": expiry,
      "uid": uid,
    }
  })
  .then(response => response)
  .then(result => result)
  .catch(error => error)
}

//get all channels
export const getChannels = ({ token, client, expiry, uid }) => {
  return axios.get(
    "http://206.189.91.54//api/v1/channels",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      }
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}

//get channel details
export const getChannelDetail = ({ id, headers:{ token, client, expiry, uid } }) => {
  return axios.get(
    "http://206.189.91.54//api/v1/channels",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      },
      params:{
        "id": id //channel id
      }
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}

//add user to channel
export const addMemberToChannel = ({ id, member_id, headers:{ token, client, expiry, uid } }) => {
  return axios.post(
    "http://206.189.91.54//api/v1/channel/add_member", 
  {
    id,
    member_id
  },
  {
    headers:{
      "access-token": token,
      "client": client,
      "expiry": expiry,
      "uid": uid,
    }
  })
  .then(response => response)
  .then(result => result)
  .catch(error => error)
}

//get all users
export const getAllUsers = ({ token, client, expiry, uid }) => {
  return axios.get(
    "http://206.189.91.54//api/v1/users",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      }
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}