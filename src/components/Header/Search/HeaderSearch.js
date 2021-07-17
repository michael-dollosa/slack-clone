import "../Search/HeaderSearch.scss"
import { useState, useRef, useEffect } from "react"
import { searchUser } from "../../../api/api"
import { NavLink } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";


const SearchBar = ({headers, handleToggleSearch}) => {
    
    //for search
    const [userSearch, setUserSearch] = useState("")
    //to record search result
    const [searchList, setSearchList] = useState([])

    //create object required for API function
    const searchObj = {
      str: userSearch,
      headers: headers
    }

    const handleUserInput = (event) => {
        setUserSearch(event.target.value)
        //trigger searchUser in API
        searchUser(searchObj)
        .then(res => setSearchList(res))
        .catch(err => console.log("search error: ", err))
    }

    //get reference of search container
    const searchRef = useRef()

    useEffect(() => {
        const hideSearchResult = (event) => {
          //if user clicks inside the referenced component, do nothing
          if(searchRef.current.contains(event.target)) return
          //if clicked outside referenced component, toggle search
          handleToggleSearch()
        }
        document.body.addEventListener("click", hideSearchResult, { capture: true })
    
        //cleanup
        return () => {
          document.body.removeEventListener("click", hideSearchResult, { capture: true })
        }
      }, [])

    //generate UI for searches
    const searchItemList = searchList.map(item => {
        return(
          <NavLink to={`/user/${item.id}`} onClick={handleToggleSearch}>
            <div className="searchBar_results_items">
                <img src={`https://picsum.photos/id/${item.id}/20`} alt="" />
                <h3>{item.email}</h3>
            </div>
          </NavLink>
        )
    })

    return (
        <div className="searchBar_container" >
            <div className="searchBar_items" ref={searchRef}>
                <div className="searchBar_input">
                    <FiSearch className="searchBar-icon" />
                    <input type="text" 
                    placeholder="Search the log of All Conversation and Knowledge" onChange={handleUserInput}/>
                    <GrFormClose className="icon-close" onClick={handleToggleSearch} />
                </div>

                <div className="searchBar_results">
                    {searchItemList}
                </div>
            </div>
        </div>
    )
}

export default SearchBar;