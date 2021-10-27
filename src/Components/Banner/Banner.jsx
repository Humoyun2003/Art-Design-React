import './Banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="banner-title">
                    <span>Art.</span> Design Blog
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, accusantium?</p>
                <form>
                    <input className="search-input" type="text" placeholder="find your food..."/>
                    <button className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Banner;