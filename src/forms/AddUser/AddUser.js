import "../AddUser/AddUser.scss"
import { HiLockClosed } from "react-icons/hi";

const AddUser = () => {
    return (
        <div className="addUserContainer">
            <div>
                Add people
            </div>
            <div>{HiLockClosed}</div>
            <input type="search">
            </input>
        </div>
    )
}

export default AddUser;