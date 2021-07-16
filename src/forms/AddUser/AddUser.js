import "../AddUser/AddUser.scss"
import { HiLockClosed } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import { searchUser } from "../../api/api";
import { NavLink } from "react-router-dom"

const AddUser = ({headers, setId}) => {
    // useState to function setSearchInput value={searchInput}
    const [searchInput, setSearchInput] = useState("");
     // useState to function setSearchUserList
    const [searchUserList, setSearchUserList] = useState([])

    const searchUserObj = {
        str: searchInput,
        headers: headers
    }
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
        searchUser(searchUserObj)
        .then(res => setSearchUserList(res))
        .catch(err => console.log("search err", err))
    }
   

    //useState to toggleSearchUserList
    const [toggleSearchUserList, setToggleSearchUserList] = useState(false)

    const handleToggleSearchUserList = (toggle) => {
        setToggleSearchUserList(toggle)
    }

    const userSearchRef = useRef()

    useEffect(() => {
        const hideSeachUserList = (event) => {
            if(userSearchRef.current.contains(event.target)) return
            setToggleSearchUserList(false)
        }
        document.body.addEventListener("click", hideSeachUserList, {capture: true})

        return () => {
            document.body.removeEventListener("click", hideSeachUserList, {capture: true})
        }
    }, [searchUserList])

    const searchUserItemList = searchUserList.map(item => {
        return(
        
            <div className="search-result-item" onClick={() => {}}>
              <img src={`https://picsum.photos/id/${item.id}/20`} alt=""/>
              <h3>{item.email}</h3>
            </div>
         
        )
      })
    

    return (
        <div className="addUser-container">
            <div className="addUser-items">
                <div className="addUser-text">
                    <h3>Add people</h3>
                    <div className="closebtn">
                        <GrFormClose/>
                    </div>
                </div>
                <h5><HiLockClosed /> batch9_Channel</h5>
                <div className="addUser_searchBar" ref={userSearchRef}>
                    <input type="search" placeholder="Enter a name, email, or user group" 
                    onChange={ handleSearchInput} onClick={() => handleToggleSearchUserList(true)} value={searchInput}
                     />
                </div>
                <div className={toggleSearchUserList ? `search-result-container container-visible` : `search-result-container` }>
                {searchUserList.length > 0 ? searchUserItemList : <div><h1>No Item</h1></div>}
                </div>
                <div className="addUser_DoneBtn">
                    <button>Done</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddUser;