const Nav = ({query, setQuery}) => {
    return(
        <nav className="navbar navbar-expand-md bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-info" href="#">Countries Useful Data</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <input onChange={(e) => setQuery(e.target.value)} value={query}  className="form-control mt-3 mt-md-0 ms-md-auto w-50" type="search" placeholder="Search by name" />                  
                </div>
            </div>
        </nav>
    )
}
export default Nav