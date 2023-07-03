import './PortfolioSection.css'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/js/bootstrap.bundle';

export default function Portfolio() {
    return (
        <>
            <div className="section-portfolio" id='portfolio'>

                <div className='section-portfolio__container'>

                    <div className='section-portfolio__text'>
                        <h2>project portfolio</h2>
                        <h3>Gallery Of Home Remodeling Projects</h3>
                        <p>To find inspiration for your next home upgrade, we encourage you to look through our gallery of completed home remodeling projects.</p>

                        <Link to="/gallery">
                            <button>VIEW GALLERY</button>
                        </Link>
                    </div>

                    <div className='section-portfolio-photos'>

                        <div id="carouselGallery" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}