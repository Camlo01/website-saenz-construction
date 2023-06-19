import "./BenefitsSection.css"

export default function Benefits() {

    return (
        <>
            <div className="section-benefits">

                <div className="section-benefits__text">
                    <h2>WHY CHOOSE US</h2>
                    <p>The Benefits Of Hiring Saenz Construction</p>
                </div>

                <div className="benefits-cards__container">

                    <div className="benefits__card" id="benefit-card__first">
                        <div className="benefits-card__container">
                            <div className="benefits-card__body">
                                <h3>Fast & Reliable Solutions</h3>
                                <p>You never have to worry about our contractors wasting time. They know how to work quickly without compromising the quality of their workmanship.</p>
                            </div>
                        </div>
                    </div>

                    <div className="benefits__card" id="benefit-card__second">
                        <div className="benefits-card__container">
                            <div className="benefits-card__body">
                                <h3>Hardworking Contractors</h3>
                                <p>We’ll come to your home ready to work hard every day so that you can get the quality results you deserve from your investment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="benefits__card" id="benefit-card__third">
                        <div className="benefits-card__container">
                            <div className="benefits-card__body">
                                <h3>Successful Process</h3>
                                <p>We treat our customers like family, with a focus on excellent communication, accessibility and friendliness in every interaction.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}