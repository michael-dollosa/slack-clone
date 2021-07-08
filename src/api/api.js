import axios from "axios"

//user registration
export const registerUser = ({ email, password, password_confirmation }) => {
  axios.post("http://206.189.91.54//api/v1/users", {
    email,
    password,
    password_confirmation
  })
  .then(response => response.text())
  .then(result => console.log("User Registration Result:", result))
  .catch(error => console.log("User Registration Error:", error))
}

//login
export const userLogin = ({ email, password }) => {
  axios.post("http://206.189.91.54//api/v1/auth/sign_in", {
    email,
    password
  })
  .then(response => response.text())
  .then(result => console.log("Login Result:", result))
  .catch(error => console.log("Login Error:", error))
}

//send message
export const sendMessage = ({ receiver_id, receiver_class, body }) => {
  axios.post("http://206.189.91.54//api/v1/messages", {
    receiver_id,
    receiver_class,
    body
  })
  .then(response => response.text())
  .then(result => console.log("Send Message Result:", result))
  .catch(error => console.log("Send Message Error:", error))
}

