import "../Header/Header.scss";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-history">
                <button><i class="far fa-clock"></i></button>
            </div>
            <div className="header-search-bar">
                <input type="text" placeholder="Search Avion School"/>
            </div>
            <div className="header-help">
                <button><i class="far fa-question-circle"></i></button>
            </div>
            <div className="header-user"></div>
        </div>
    )
}

export default Header;