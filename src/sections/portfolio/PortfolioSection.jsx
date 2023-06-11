import './PortfolioSection.css'
import 'bootstrap/dist/js/bootstrap.bundle';

export default function Portfolio() {
    return (
        <>
            <div className="section-portfolio">

                <div className='section-portfolio__container'>

                    <div className='section-portfolio__text'>
                        <h2>project portfolio</h2>
                        <h3>Gallery Of Home Remodeling Projects</h3>
                        <p>To find inspiration for your next home upgrade, we encourage you to look through our gallery of completed home remodeling projects.</p>
                        <button>VIEW GALLERY</button>
                    </div>

                    <div className='section-portfolio-photos'>

                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="images/roof-gallery-1.jpg" className="d-block w-85" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span clclassNameass="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}