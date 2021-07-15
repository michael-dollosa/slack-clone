import "./ChatNewMessage.scss"
import ChatHeader from "../ChatHeader/ChatHeader";
import { useState, useRef, useEffect } from "react"
import { searchUser } from "../../../api/api"
import { NavLink } from "react-router-dom"

const ChatNewMessage = ({headers , userDetails}) => {

  const [userSearch, setUserSearch] = useState("")
  const [searchList, setSearchList] = useState([])
  const [toggleSearch, setToggleSearch] = useState(false)

  const searchObj = {
    str: userSearch,
    headers: headers
  }
  const handleUserInput = (event) => {
    setUserSearch(event.target.value)
    searchUser(searchObj)
      .then(res => setSearchList(res))
      .catch(err => console.log("search error: ", err))
  }

  const handleToggleSearch = (toggle) => {
    setToggleSearch(toggle)
  }

  const searchRef = useRef()

  useEffect(() => {
    const hideSearchResult = (event) => {
      if(searchRef.current.contains(event.target)) return
      setToggleSearch(false)
    }
    document.body.addEventListener("click", hideSearchResult, { capture: true })

    //cleanup
    return () => {
      document.body.removeEventListener("click", hideSearchResult, { capture: true })
    }
  }, [])

  const searchItemList = searchList.map(item => {
    return(
      <NavLink to={`/user/${item.id}`} >
        <div className="search-result-item">
          <img src={`https://picsum.photos/id/${item.id}/20`} />
          <h3>{item.email}</h3>
        </div>
      </NavLink>
    )
  })

  return(
    <div>
      <main className="chat_container-main">
        <ChatHeader chatType="new" />
        <section className="chat-user-search-container" ref={searchRef}>
          <label>To:</label>
          <input type="search" onChange={handleUserInput} onClick={() => handleToggleSearch(true)}/>
          
        </section>
        <div className={toggleSearch ? `search-result-container container-visible` : `search-result-container`  }  >
            {searchItemList}
          </div>
      </main>
    </div>
  )
}

export default ChatNewMessage