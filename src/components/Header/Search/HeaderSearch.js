import "../Search/HeaderSearch.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { BsFiles} from "react-icons/bs"
import { BsFileText } from "react-icons/bs"
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5"

const SearchBar = ({handleClose}) => {

    
    return (
        <div className="searchBar_container" >
            <div className="searchBar_items">
                <div className="searchBar_input">
                    <FiSearch className="searchBar-icon" />
                    <input type="search" 
                    placeholder="Search the log of All Conversation and Knowledge">
                    </input>
                    <GrFormClose className="icon-close" onClick={handleClose} />
                </div>
                <div className="searchBar_body">
                    <span>I'm Looking for...</span>
                    <div className="searchBar-body-buttons">
                        <button>
                            <IoChatbubblesOutline/>
                            Messages
                        </button>
                        <button>
                            <BsFiles />
                            Files
                        </button>
                        <button>
                            <BsFileText />
                            Channels
                        </button>
                        <button>
                            <IoPeopleOutline />
                            People
                        </button>
                    </div>
                </div>
                <div className="searchBar_footer">
                    <div className="footer-items">
                        <span>Not the result you expected? </span>
                        <Link>Give feedback</Link>
                        <span> or </span>
                        <Link>learn more</Link>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default SearchBar;