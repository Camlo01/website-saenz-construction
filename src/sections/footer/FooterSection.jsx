import './FooterSection.css'

export default function Footer() {
    return (
        <>
            <div className="section-footer">

                <div className="section-footer__container">

                    <div className='section-footer__locations' id='section-footer__locations'>
                        <img src="../icons/icon-saenz.jpeg" alt="" />
                        <p className='footer-locations__title'>Saenz Construction Pittsburgh pensilvania</p>
                        <p>4708 Theodore </p>
                        <p>Street 15120</p>
                        <p>(412) 721-3612</p>
                    </div>

                    <div className='section-footer__column'>
                        <p>Help</p>
                        <a href="">Contact</a>
                        <a href="">Warranty</a>
                        <a href="">Financing</a>
                        <a href="">Customer Service</a>
                        <a href="">Customer Portal</a>
                    </div>

                    <div className='section-footer__column'>
                        <p>Services</p>
                        <a href="">Roofing</a>
                        <a href="">Siding</a>
                        <a href="">Gutters</a>
                        <a href="">Customer Service</a>
                    </div>

                    <div className='section-footer__column'>
                        <p> Service Areas </p>
                        <a href="">Baldwin</a>
                        <a href="">Bethel Park</a>
                        <a href="">Bridgeville</a>
                        <a href="">Canonsburg</a>
                    </div>

                    <div className='section-footer__column'>
                        <p>Company</p>
                        <a href="">Awards</a>
                        <a href="">Blog</a>
                        <a href="">Offers</a>
                        <a href="">Reviews</a>
                        <a href="">Careers</a>
                        <a href="">Our Team</a>
                        <a href="">Past Projects</a>
                    </div>

                </div>

                <div className='section-footer__copyright'>
                    <p>© 2022 - 2022 Saenz Constructions | by <a href="https://systemwork.com.co/">Systemwork</a></p>
                </div>

            </div></>
    )
}