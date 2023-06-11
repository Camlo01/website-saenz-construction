import "./OpinionsSection.css"
import 'bootstrap/dist/js/bootstrap.bundle';

export default function Opinions() {

    return (
        <>
            <div className="section-opinions">
                <div className="section-opinion__container">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="opinions-section__card">
                                    <q>"I had siding put up on my whole house, and the crew was very hard-working. They took great pride in their work. They were extremely responsive to inquiries and kept me in the loop with timeframes. I’ll definitely recommend this company to my friends."</q>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="opinions-section__card">
                                    <q>"We had our roof replaced two weeks ago. The entire experience was professional, from Jace who quoted the job, and Manny and his team... hardworking, courteous and detail oriented. Could not be happier with the final product. The new roof, soffit, facia and gutters looks amazing"</q>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}