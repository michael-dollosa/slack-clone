import "../AddUser/AddUser.scss";
import { HiLockClosed } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { searchUser, getSpecificUser } from "../../api/api";

const AddUser = ({ headers, handleFormAddUserExit, handlesetGetUserArr=null }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchUserList, setSearchUserList] = useState([]);
  const [toggleSearchUserList, setToggleSearchUserList] = useState(false);
  const [confirmUserList, setConfirmUserList] = useState([]) //arr of users chosen

  const searchUserObj = {
    str: searchInput,
    headers: headers,
  };

  const chooseUser = (data) => {
    //clears value of search input
    setSearchInput("")
    
    //using some to check for existing ids
    const found = confirmUserList.some(user => user.id === data.id)
    if(found) return //exit function if there is a duplicate 

    //since states are immutable, we have to create a new array and add the new data into it
    const updateUserListArr = [...confirmUserList, data]
    //set state by giving a new array
    setConfirmUserList(updateUserListArr)
    //use function from channel component to get ids 
    if(handlesetGetUserArr !== null) handlesetGetUserArr(updateUserListArr)
  }

  const searchUserDetail = (id) => {
    const getSpecificUserObj = {
      id,
      headers
    }
    getSpecificUser(getSpecificUserObj)
      .then(res => chooseUser(res[0]))
      .catch(err => console.log("fetch user failed: ", err))
  }

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    searchUser(searchUserObj)
      .then((res) => setSearchUserList(res))
      .catch((err) => console.log("search err", err));
  };
  const handleToggleSearchUserList = (toggle) => {
    setToggleSearchUserList(toggle);
  };
  const userSearchRef = useRef();
  useEffect(() => {
    console.log("user list", confirmUserList)
    
    const hideSeachUserList = (event) => {
      if (userSearchRef.current.contains(event.target)) return;
      setToggleSearchUserList(false);
    };
    document.body.addEventListener("click", hideSeachUserList, {
      capture: true,
    });
    return () => {
      document.body.removeEventListener("click", hideSeachUserList, {
        capture: true,
      });
    };
  }, [confirmUserList]);

  const searchUserItemList = searchUserList.map((item) => {
    return (
      <div className="addUser_search-result-item" onClick={() => searchUserDetail(item.id)}>
        <img src={`https://picsum.photos/id/${item.id}/20`} alt="" />
        <h3>{item.email}</h3>
      </div>
    );
  });

  const toBeAddedUserList = confirmUserList.map((user) => {
    return(
        <div className="addUser_toAdd-users">
          <img src={`https://picsum.photos/id/${user.id}/40`} alt="" />
          <h3>{user.email}</h3>
        </div>
    )
  })

  return (
    <div className="addUser-container">
      <div className="addUser-items">
        <div className="addUser-text">
          <h1>Add people</h1>
          <div className="closebtn">
            <IoCloseOutline onClick={handleFormAddUserExit}/>
          </div>
        </div>

        <h5>
          <HiLockClosed /> batch9_Channel
        </h5>
        <div className="addUser_searchBar" ref={userSearchRef}>
          <input
            type="search"
            placeholder="Enter a name, email, or user group"
            onChange={handleSearchInput}
            onClick={() => handleToggleSearchUserList(true)}
            value={searchInput}
          />
        </div>
        <div
          className={
            toggleSearchUserList
              ? `addUser_search-result-container container-visible`
              : `addUser_search-result-container`
          }
        >
          {searchUserItemList}
        </div>
        <section className="addUser-search-body-container">
          <section className="addUser_confirm-list">
          <h5>Users to be Added:</h5>
          <div className="addUser_users-list">
            {toBeAddedUserList}
          </div>
        </section>



        <div className="addUser_DoneBtn">
          <button>Done</button>
        </div>
          </section>
          
        </div>
      
    </div>
  );
};
export default AddUser;
