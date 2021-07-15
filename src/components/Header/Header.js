import "../Header/Header.scss";
import History from "./History/HeaderHistory";
import SearchBar from "./Search/HeaderSearch";
import HelpBtn from "./Help/HeaderHelp"
import HeaderUser from "./User/HeaderUser";


const Header = () => {
    return (
        <div className="header-container">
            <History />
            <SearchBar />
            <HelpBtn />
            <HeaderUser />
        </div>
    )
}

export default Header;