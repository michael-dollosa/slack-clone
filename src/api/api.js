import axios from "axios"

const axiosFetch = axios.create({
  baseURL: process.env.REACT_APP_SLACK_API_URL
})
//user registration
export const registerUser = ({ email, password, password_confirmation }) => {
  return axiosFetch.post("/api/v1/auth/", {
    email,
    password,
    password_confirmation
  })
  .then(response => response)
  .then(result => result)
  .catch(error => error)
}

//login
/*
obj = {
  email: asdasd,
  password: asdasd
}
*/
export const userLogin = ({ email, password }) => {
  return axiosFetch.post("/api/v1/auth/sign_in", {
    email,
    password
  })
  .then(response => response) //promise
  .catch(error => error)
}

//send message
export const sendMessage = ({ receiver_id, receiver_class, body, headers:{ token, client, expiry, uid } }) => {
  return axiosFetch.post(
    "/api/v1/messages", 
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
  return axiosFetch.get(
    "/api/v1/messages",
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
  return axiosFetch.post(
    "/api/v1/channels", 
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
  return axiosFetch.get(
    "/api/v1/channels",
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
  return axiosFetch.get(
    `/api/v1/channels/${id}`,
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      },
      
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}

//add user to channel
export const addMemberToChannel = ({ id, member_id, headers:{ token, client, expiry, uid } }) => {
  return axiosFetch.post(
    "/api/v1/channel/add_member", 
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
  return axiosFetch.get(
    "/api/v1/users",
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

//get specific user via id
export const getSpecificUser = ({id, headers:{token, client, expiry, uid}}) => {
  return axiosFetch.get(
    "/api/v1/users",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      }
    })
    .then(response => response)
    .then(result => {
      return result.data.data.filter(data => data.id === id) 
    })
    .catch(error => error)
}

export const searchUser = ({str, headers:{token, client, expiry, uid}}) => {
  return axiosFetch.get(
    "/api/v1/users",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      }
    })
    .then(response => response)
    .then(result => {
      //record api data array to var
      const dataArr = result.data.data
      // console.log(dataArr)
      const resultArr = dataArr.filter(user => user.email.includes(str))
      return resultArr
    })
    .catch(error => error)
}

  export const getInteractedUsers = ({token, client, expiry, uid}) => {
  return axiosFetch.get(
    "/api/v1/users/recent/",
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