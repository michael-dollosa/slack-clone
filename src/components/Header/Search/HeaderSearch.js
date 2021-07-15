import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import "../Search/HeaderSearch.scss"
import { Link } from "react-router-dom";

const SearchBar = () => {
    // const placeHolder = [
    //     {placeholder: 'Search the log of'},
    //     {placeholder: 'Search the log of'},
    //     {placeholder: 'Search the log of'},
    //     {placeholder: 'Search the log of'},
    //     {placeholder: 'Search the log of'},
    // ]
    return (
        <div className="searchBar_container">
            <div className="searchBar_items">
                <div className="searchBar_input">
                    <FiSearch className="searchBar-icon" />
                    <input type="search" 
                    placeholder="Search the log of All Conversation and Knowledge">
                    </input>
                    <GrFormClose className="icon-close" />
                </div>
                <div className="searchBar_body">
                    <span>I'm Looking for...</span>
                    <button>Messages</button>
                    <button>Files</button>
                    <button>Channels</button>
                    <button>People</button>
                </div>
                <div className="searchBar_footer">
                    <span>Not the result you expected? </span>
                    <Link>Give feedback</Link>
                    <span> or </span>
                    <Link>learn more</Link>
                </div>

            </div>
        </div>
    )
}

export default SearchBar;