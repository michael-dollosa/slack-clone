import "../AddUser/AddUser.scss";
import { HiLockClosed } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import { searchUser } from "../../api/api";
import { NavLink } from "react-router-dom"

const AddUser = ({headers}) => {

<<<<<<< HEAD
const AddUser = ({ headers }) => {
  //     const headers = {
  //       token: "ZaIU1ptRK4arZ3MbSeYrlA",
  //       client: "IMV_7cNEPy0gArKnq8slmQ",
  //       expiry: 1627560704,
  //       uid: "steph@gmail.com"
  //   }
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchObj = {
    str: searchInput,
    headers: headers,
  };

  useEffect(() => {
    searchUser(searchObj)
      .then((res) => console.log("search response: ", res))
      .catch((err) => console.log("search error: ", err));
  });

  return (
    <div className="addUserContainer">
      <div className="addUser_Items">
        <div className="addUser_Text">
          <h3>Add people</h3>
          <div className="closebtn">
            <GrFormClose />
          </div>
        </div>
        <h5>
          <HiLockClosed /> batch9_Channel
        </h5>

        <div className="addUser_searchBar">
          <input
            type="search"
            placeholder="Enter a name, email, or user group"
            onChange={(event) => handleSearchInput(event)}
            value={searchInput}
          />
        </div>
        <div className="addUser_DoneBtn">
          <button>Done</button>
=======
    const [searchInput, setSearchInput] = useState("");
    const [searchUserList, setSearchUserList] = useState([])
    const [toggleSearchUserList, setToggleSearchUserList] = useState(false)

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
    }, [])

    const searchUserItemList = searchUserList.map(item => {
        return(
          <NavLink to={`/user/${item.id}`} >
            <div className="search-result-item">
              <img src={`https://picsum.photos/id/${item.id}/20`} />
              <h3>{item.email}</h3>
            </div>
          </NavLink>
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
                {searchUserItemList}
                </div>
                <div className="addUser_DoneBtn">
                    <button>Done</button>
                </div>
            </div>
            
>>>>>>> 2e9a60607ab3610c26863ec6eb5349d1ae07b7b6
        </div>
      </div>
    </div>
  );
};

export default AddUser;
