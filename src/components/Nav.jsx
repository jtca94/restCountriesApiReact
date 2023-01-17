const Nav = ({query, setQuery}) => {
    return(
        <nav className="navbar navbar-expand-md bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand text-info" href="#">Countries Useful Data</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light me-5">Link</a>
                    </li>
                </ul>
                
                    <input onChange={(e) => setQuery(e.target.value)} value={query}  className="form-control me-2 ms-auto w-75" type="search" placeholder="Search by name/continent" />
                    
                </div>
            </div>
        </nav>
    )
}
export default Nav