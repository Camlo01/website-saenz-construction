import './FooterSection.css'

export default function Footer() {
    return (
        <>
            <div className="section-footer">

                <div className="section-footer__container">

                    <div className='section-footer__column' id='section-footer__locations'>
                        <img src="../icons/wolf-icon2.png" alt="" />
                        <p className='footer-locations__title'>Saenz Construction Pittsburgh pensilvania</p>
                        <p>4708 Theodore Street 15120</p>
                        <p>(412) 721-3612</p>
                    </div>

                    <div className='section-footer__column'>
                        <p>Help</p>
                        <a href="#get-free-quote">Contact</a>
                        <a href="#get-free-quote">Warranty</a>
                        <a href="#get-free-quote">Financing</a>
                        <a href="#get-free-quote">Customer Service</a>
                        <a href="#get-free-quote">Customer Portal</a>
                    </div>

                    <div className='section-footer__column'>
                        <p>Services</p>
                        <a href="#get-free-quote">Roofing</a>
                        <a href="#get-free-quote">Siding</a>
                        <a href="#get-free-quote">Gutters</a>
                        <a href="#get-free-quote">Customer Service</a>
                    </div>

                    <div className='section-footer__column'>
                        <p> Service Areas </p>
                        <a href="#get-free-quote">Baldwin</a>
                        <a href="#get-free-quote">Bethel Park</a>
                        <a href="#get-free-quote">Bridgeville</a>
                        <a href="#get-free-quote">Canonsburg</a>
                    </div>

                    <div className='section-footer__column'>
                        <p>Company</p>
                        <a href="#get-free-quote">Awards</a>
                        <a href="#get-free-quote">Blog</a>
                        <a href="#get-free-quote">Offers</a>
                        <a href="#get-free-quote">Reviews</a>
                        <a href="#get-free-quote">Careers</a>
                        <a href="#get-free-quote">Our Team</a>
                        <a href="#get-free-quote">Past Projects</a>
                    </div>

                </div>

                <div className='section-footer__copyright'>
                    <p>© 2022 - 2022 Saenz Constructions | by <a href="https://systemwork.com.co/">Systemwork</a></p>
                </div>

            </div></>
    )
}