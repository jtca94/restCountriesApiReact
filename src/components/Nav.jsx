const Nav = ({setQuery}) => {
    return(
        <nav className="navbar navbar-expand-md bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-info" href="#">Countries Useful Data <i className="fa-regular ps-1 fa-flag"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-lg py-1 fa-magnifying-glass"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                {/* Input para buscar */}
                <input onChange={(e) => setQuery(e.target.value)}  className="form-control mt-3 mt-md-0 ms-md-auto w-50" type="search" placeholder="Search by name" />                  
                </div>
            </div>
        </nav>
    )
}
export default Nav