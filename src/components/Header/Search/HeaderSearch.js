import "../Search/HeaderSearch.scss"

const SearchBar = () => {
    return (
        <div className="header-search">
            <button className="header-search-btn">
                <i class="fas fa-search"></i>
                <span>Search Avion School</span> 
            </button>
        </div>
    )
}

export default SearchBar;