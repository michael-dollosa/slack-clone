import "../Header/Header.scss";
import HelpBtn from "./HeaderHelp";
import History from "./HeaderHistory";
import SearchBar from "./HeaderSearch";
import HeaderUser from "./HeaderUser";

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