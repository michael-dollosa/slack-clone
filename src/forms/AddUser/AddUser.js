import "../AddUser/AddUser.scss"
import { HiLockClosed } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState, useEffect } from "react";
import { searchUser } from "../../api/api";

const AddUser = () => {
    const headers = {
      token: "ZaIU1ptRK4arZ3MbSeYrlA",
      client: "IMV_7cNEPy0gArKnq8slmQ",
      expiry: 1627560704,
      uid: "steph@gmail.com"
  }
    const [searchInput, setSearchInput] = useState("");


    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const searchObj = {
        str: searchInput,
        headers: headers
    }

    useEffect(() => {
        searchUser(searchObj)
          .then(res => console.log("search response: ", res))
          .catch(err => console.log("search error: ", err))
    })
    

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
                    <input type="search" placeholder="Enter a name, email, or user group" 
                    onChange={event => handleSearchInput(event)} value={searchInput}
                     />
                </div>
                <div className="addUser_DoneBtn">
                    <button>Done</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddUser;