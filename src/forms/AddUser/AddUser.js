import "../AddUser/AddUser.scss"
import { HiLockClosed } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../api/api";

const AddUser = () => {
    const headers = {
      token: "bmYDmIK8a7OPeUt73qJ8JQ",
      client: "qWGX141QEphMy7EYsGdHMQ",
      expiry: 1627457531,
      uid: "steph@gmail.com"
  }
    const [userList, setUserList] = useState("");
    const [allUsers, setAllUsers] = useState("");

    const handleUsers = (event) => {
        setUserList(event.target.value)
    }

    useEffect(() =>{
        getAllUsers(headers)
        .then(res => setAllUsers(res))
    }, [])

    // useEffect(() =>{
    //     if(!allUsers)
    //     .then(res => setAllUsers(res))
    // }, [])

    // const renderUserList = users.data.data.map((user) => {
    //     return (
    //         user.id
    //     ) 
    // })

    return (
        <div className="addUserContainer">
            <div className="addUser_Items">
                <div className="addUser_Text">
                    <h3>Add people</h3>
                    <div className="closebtn">
                        <GrFormClose/>
                    </div>
                </div>
                <h5><HiLockClosed /> batch9_Channel</h5>

                
                <div className="addUser_searchBar">
                    <input type="search" placeholder="Enter a name, email, or user group" onChange={event => handleUsers(event)} value={userList} />
                </div>
                <div className="addUser_DoneBtn">
                    <button>Done</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddUser;