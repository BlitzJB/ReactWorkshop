import "./Navbar.css"

function Nav() {

    return <>
        <div className="nav-container">
            <div className="nav-logo">
                <img src="src\assets\react.svg" alt="" />
            </div>
            <div className="nav-links">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/profile">Profile</a>
                <a className="nav-link" href="/posts">Posts</a>
            </div>
        </div>
    </>
}

export default Nav