import "./ServicesSection.css"

export default function Services() {

    // method in charge to return 
    function handleClick() {
        window.location.href = '#';
    }

    return (
        <>
            <section className="section-services">

                <div className="section-services__text">
                    <p id="our-services">OUR SERVICES</p>
                    <h2>Roofing, Siding, Gutters and More</h2>
                    <p>Whether you are restoring a fixer-upper or renovating your forever home, Saenz Construction can help you achieve all your goals. Our expert roofing and exterior remodeling company has the knowledge, skills, and resources to handle even the most challenging roofing and siding needs! We can beautify your property with a stunning roof replacement, customized siding, or seamless gutters! Additionally, our team of experts is happy to help guide you through the storm damage restoration process. Your home renovations are in excellent hands with our local family business!</p>
                </div>

                <div className="section-services__card">

                    <div className="services-cards__container">

                        {/* First Card */}
                        <div className="services-card__container">
                            <div className="services__card" onClick={handleClick}>

                                <div className="services-card__text" id="card-services-roofing">
                                    <div className="services-card__text-layer" >
                                        <button>ROOFING</button>
                                        <div className="services-card__body">
                                            <h2>Best-in-Class Roofing Experts</h2>
                                            <p>From residential roof replacements to new construction on commercial properties, our roofing contractors offer expert installation backed by the industry’s best warranties. How do we do it? It’s all thanks to our skilled team and hard-earned certifications including Owens Corning Platinum Preferred.</p>
                                            <div className="services-card-link"><a href="#">LEARN MORE</a></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="services-card__container">
                            <div className="services__card" onClick={handleClick}>
                                <div className="services-card__text" id="card-services-siding">
                                    <div className="services-card__text-layer" >
                                        <button>SIDING</button>
                                        <div className="services-card__body">
                                            <h2>Superior Products & Installation</h2>
                                            <p>We offer a variety of stylish siding options to transform the appearance, efficiency, and weather protection of your home. From James Hardie’s unmatched fiber cement to beautiful yet budget-friendly vinyl, our siding specialists will help you choose the best material for your home architecture, remodeling budget, and aesthetic vision.</p>
                                            <div className="services-card-link"><a href="#">LEARN MORE</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-card__container">
                            <div className="services__card" onClick={handleClick}>
                                <div className="services-card__text" id="card-services-gutters">
                                    <div className="services-card__text-layer">
                                        <button>GUTTERS</button>
                                        <div className="services-card__body">
                                            <h2>Durable Gutters & Gutter Guards</h2>
                                            <p>Upgrade to seamless gutters and leaf guards to protect your home from storm runoff and moisture build-up. This quick and cost-effective home upgrade pays off right away—helping you spend far less time cleaning out clogged gutters and far less money on frustrating water damage repairs.</p>
                                            <div className="services-card-link"><a href="#">LEARN MORE</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services-card__container">
                            <div className="services__card" onClick={handleClick}>
                                <div className="services-card__text" id="card-services-insure">
                                    <div className="services-card__text-layer">
                                        <button>INSURE CLAIMS</button>
                                        <div className="services-card__body">
                                            <h2>Storm Damage Restoration </h2>
                                            <p>You’ve already survived the stress of wind, hail, or storm damage, and you shouldn’t have to face yet another stressful battle to for your roof replacement or new siding. That’s what we believe at Saenz Construction, and it’s why we offer courteous, professional care to walk you through every step of the insurance claims process.</p>
                                            <div className="services-card-link"><a href="#">LEARN MORE</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}