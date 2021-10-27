import './About.css';
import AboutImg from '../../Assets/Images/about-img.jpg';

function About() {
    return (
        <section className="about" id="about">
        <div className="container">
            <div className="about-content">
                <div className="about-img">
                    <img src={AboutImg} alt="about image"/>    
                </div>
                <div className="about-text">
                    <div className="title">
                        <h2>Humoyun Abduqodirov</h2>
                        <p>Frontend developer</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum neque voluptatibus itaque, saepe
                        rerum porro dolorem officia labore mollitia sequi! Dolore quo fuga dolorem, corporis omnis
                        veritatis, odit, atque deserunt perspiciatis facilis error sunt inventore quod tempore? Quae
                        ratione accusamus consequuntur enim eos nisi quasi at nostrum veniam eum asperiores possimus
                        aliquid pariatur cum, aspernatur sed! Debitis vitae impedit ducimus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam assumenda libero nisi
                        consectetur labore quis repudiandae eligendi. Numquam quasi ut iure voluptas ullam distinctio
                        officia et labore! Vitae labore eaque doloremque similique voluptatum soluta odit libero veniam
                        cumque! Repellendus.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;