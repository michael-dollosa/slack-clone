import "../Header/Header.scss";
import { useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Header = ({userID, handleShow}) => {

    return(
        <div className="header-container ">
            <section className="header-history header-flex-center">
                <MdAccessTime className="header-side-icons"/>
            </section>

            <section className="header-search">
                <button className="header-search-btn" onClick={handleShow}>
                    <FiSearch className="icon"/>
                    <span>Search Avion School</span> 
                </button>
            </section>

            <section className="header-help header-flex-center">
                <IoIosHelpCircleOutline className="header-side-icons"/>
            </section>
            <section className="header-user-img">
                <img src={`https://picsum.photos/id/${userID}/26`} />
            </section>
        </div>
    )
}

export default Header;