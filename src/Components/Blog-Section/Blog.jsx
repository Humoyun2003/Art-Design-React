import './Blog.css'
import BlogPhoto1 from '../../Assets/Images/blog-p-1.jpg';
import BlogPhoto2 from '../../Assets/Images/blog-p-2.jpg';
import BlogPhoto3 from '../../Assets/Images/blog-p-3.jpg';
import BlogPhoto4 from '../../Assets/Images/blog-p-4.jpg';
import BlogPhoto5 from '../../Assets/Images/blog-p-5.jpg';
import BlogPhoto6 from '../../Assets/Images/blog-p-6.jpg';

function Blog() {
    return (
        <section className="blog" id="blog">
        <div className="container">
            <div className="title">
                <h2>Recent Arts & Design</h2>
                <p>RECENT ARTS & DESIGN ON THE BLOG</p>
            </div>
            <div className="blog-content">
                <div className="blog-item">
                    <div className="blog-img">
                        <img src={BlogPhoto1} alt="Blog image-1"/>
                        <span>
                            <i className="far fa-heart"></i>
                        </span>
                    </div>
                    <div className="blog-text">
                        <span>15 August, 2021</span>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas veritatis quisquam
                            eveniet quidem vel maiores debitis, unde nemo accusamus!</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-img">
                        <img src={BlogPhoto2} alt="Blog image-2"/>
                        <span>
                            <i className="far fa-heart"></i>
                        </span>
                    </div>
                    <div className="blog-text">
                        <span>15 August, 2021</span>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas veritatis quisquam
                            eveniet quidem vel maiores debitis, unde nemo accusamus!</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-img">
                        <img src={BlogPhoto3} alt="Blog image-3"/>
                        <span>
                            <i className="far fa-heart"></i>
                        </span>
                    </div>
                    <div className="blog-text">
                        <span>15 August, 2021</span>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas veritatis quisquam
                            eveniet quidem vel maiores debitis, unde nemo accusamus!</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-img">
                        <img src={BlogPhoto4} alt="Blog image-4"/>
                        <span>
                            <i className="far fa-heart"></i>
                        </span>
                    </div>
                    <div className="blog-text">
                        <span>15 August, 2021</span>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas veritatis quisquam
                            eveniet quidem vel maiores debitis, unde nemo accusamus!</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-img">
                        <img src={BlogPhoto5} alt="Blog image-5"/>
                        <span>
                            <i className="far fa-heart"></i>
                        </span>
                    </div>
                    <div className="blog-text">
                        <span>15 August, 2021</span>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas veritatis quisquam
                            eveniet quidem vel maiores debitis, unde nemo accusamus!</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-img">
                        <img src={BlogPhoto6} alt="Blog image-6"/>
                        <span>
                            <i className="far fa-heart"></i>
                        </span>
                    </div>
                    <div className="blog-text">
                        <span>15 August, 2021</span>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas veritatis quisquam
                            eveniet quidem vel maiores debitis, unde nemo accusamus!</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blog;