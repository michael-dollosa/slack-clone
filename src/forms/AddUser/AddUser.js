import "../AddUser/AddUser.scss"
import { HiLockClosed } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const AddUser = ({users}) => {

    const renderUserList = users.data.data.map((user, index) => {
        return (
          <input key={index} type="search" placeholder="Enter a name, email, or user group"/>
        ) 
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
                    {renderUserList}
                </div>
                <div className="addUser_DoneBtn">
                    <button>Done</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddUser;