import "../Header/Header.scss";
<<<<<<< HEAD
import History from "./History/HeaderHistory";
import SearchBar from "./Search/HeaderSearch";
import HelpBtn from "./Help/HeaderHelp"
import HeaderUser from "./User/HeaderUser";


const Header = () => {
    return (
        <div className="header-container">
            <History />
            <div className="header-search">
                <button className="header-search-btn">
                    <i class="fas fa-search"></i>
                    <span>Search Avion School</span> 
                </button>
            </div>
            {/* <SearchBar /> */}
            <HelpBtn />
            <HeaderUser />
=======
import { MdAccessTime } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Header = ({userID}) => {

    return(
        <div className="header-container ">
            <section className="header-history header-flex-center">
                <MdAccessTime className="header-side-icons"/>
            </section>

            <section className="header-search">
                <button className="header-search-btn">
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
>>>>>>> 7415c3772a797646c456cb6dc3a8363d782c7923
        </div>
    )
}

export default Header;