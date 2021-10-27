import './Design.css';
import DesignPhoto1 from '../../Assets/Images/art-design-1.jpg';
import DesignPhoto2 from '../../Assets/Images/art-design-2.jpg';
import DesignPhoto3 from '../../Assets/Images/art-design-3.jpg';
import DesignPhoto4 from '../../Assets/Images/art-design-4.jpg';
import DesignPhoto5 from '../../Assets/Images/art-design-5.jpg';
import DesignPhoto6 from '../../Assets/Images/art-design-6.jpg';

function Design() {
    return (
        <section className="design" id="design">
        <div className="container">
            <div className="title">
                <h2>Recent Arts & Design</h2>
                <p>RECENT ARTS & DESIGN ON THE BLOG</p>
            </div>
            <div className="design-content">
                <div className="design-item">
                    <div className="design-img">
                        <img src={DesignPhoto1} alt="Design image-1"/>
                        <span>
                            <i className="far fa-heart">22</i>
                        </span>
                        <span>Art & Design</span>
                    </div>
                    <div className="design-title">
                        <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat.</a>
                    </div>
                </div>
                <div className="design-item">
                    <div className="design-img">
                        <img src={DesignPhoto2} alt="Design image-2"/>
                        <span>
                            <i className="far fa-heart">22</i>
                        </span>
                        <span>Art & Design</span>
                    </div>
                    <div className="design-title">
                        <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat.</a>
                    </div>
                </div>
                <div className="design-item">
                    <div className="design-img">
                        <img src={DesignPhoto3} alt="Design image-3"/>
                        <span>
                            <i className="far fa-heart">22</i>
                        </span>
                        <span>Art & Design</span>
                    </div>
                    <div className="design-title">
                        <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat.</a>
                    </div>
                </div>
                <div className="design-item">
                    <div className="design-img">
                        <img src={DesignPhoto4} alt="Design image-4"/>
                        <span>
                            <i className="far fa-heart">22</i>
                        </span>
                        <span>Art & Design</span>
                    </div>
                    <div className="design-title">
                        <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat.</a>
                    </div>
                </div>
                <div className="design-item">
                    <div className="design-img">
                        <img src={DesignPhoto5} alt="Design image-5"/>
                        <span>
                            <i className="far fa-heart">22</i>
                        </span>
                        <span>Art & Design</span>
                    </div>
                    <div className="design-title">
                        <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat.</a>
                    </div>
                </div>
                <div className="design-item">
                    <div className="design-img">
                        <img src={DesignPhoto6} alt="Design image-6"/>
                        <span>
                            <i className="far fa-heart">22</i>
                        </span>
                        <span>Art & Design</span>
                    </div>
                    <div className="design-title">
                        <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat.</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Design;