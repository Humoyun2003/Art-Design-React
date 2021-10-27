import './Nav.css';
function Nav() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navigation">
                    <div className="logo">
                        <a href="/">Early Morning</a>
                    </div>
                    <div className="navbar-nav">
                        <i className="fas fa-bars"></i>
                        <a href="/">home</a>
                        <a href="#design">design</a>
                        <a href="#blog">blog</a>
                        <a href="#about">about</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;