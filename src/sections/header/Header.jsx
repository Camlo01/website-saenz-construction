
import './Header.css'
import './HeaderLogic'

export default function Header() {

    return (
        <>
            <header>
                <section className='section-navbar' id='navbarElement'>

                    <div className='navbar__image' >
                        <img className='logo' src={'../icons/saenz-house-icon.png'} alt="Logo de la empresa" id='icon-navbar' />
                    </div>

                    <div className='section-navbar-elements'>

                        <div className='navbar__buttons'>
                            <p id='phone-number'>(724) 554-6224</p>
                            <button id='call-button'>Call</button>
                            <button id='free-quote-button'>
                                <a href="#get-free-quote">FREE QUOTE</a>
                            </button>
                        </div>

                        <div className='navbar-menu'>
                            <button id='open-menu'>|||</button>
                            <div className='navbar__menu' id='menu'>
                                <button id='close-menu'>X</button>
                                <ul className='navbar__list'>
                                    <li><a href="#services" className='nav-button-item'>SERVICES</a></li>
                                    <li><a href="#mision" className='nav-button-item'>MISION</a></li>
                                    <li><a href="#opinions" className='nav-button-item'>OPINIONS</a></li>
                                    <li><a href="#benefits" className='nav-button-item'>BENEFITS</a></li>
                                    <li><a href="#portfolio" className='nav-button-item'>GALLERY</a></li>
                                    <li><a href="#about" className='nav-button-item'>ABOUT</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>



                </section>
                <section className='header'>

                    <div className='header__items-container'>

                        <div className='header__title'>

                            <h1>Your Trusted Pittsburgh Roofing Company</h1>
                            <p>Our experienced roofing and exterior renovation contractors are experts in roof replacement, residential siding, new gutters and more!</p>
                            <div className='header__google-reviews'>
                            </div>
                        </div>

                        <div className='header__form' id='get-free-quote'>

                            <h2>Get Started Now</h2>

                            <input placeholder='Full Name' type="text" />
                            <input placeholder='Email Address' type="text" />
                            <input placeholder='Phone Number' type="text" />
                            <input placeholder='Full Address' type="text" />
                            <select name="source" id="source-client">
                                <option value="none" selected disabled>How did you hear about us?</option>
                                <option value="Internet">Internet Search</option>
                                <option value="Referral">Referral</option>
                                <option value="Car">Saenz Car</option>
                                <option value="Flyer">Flyer</option>
                                <option value="Facebook">Facebook</option>
                            </select>
                            <textarea placeholder='Proyect Description' name="" id="" cols="30" rows="10"></textarea>
                            <input placeholder='ZIP Code' type="text" />

                            <button>GET FREE QUOTE</button>

                        </div>
                    </div>

                    <div className='header-rate'>

                        <div className='header-rate__calification'>

                            <div className='rate-calification__card'><img src="" alt="" /><div className='calification-card__text'><h2>4.9</h2><p>OUT OF 493 REVIEWS</p></div></div>
                            <div className='rate-calification__card'><img src="" alt="" /><div className='calification-card__text'><h2>4.9</h2><p>OUT OF 99 REVIEWS</p></div></div>
                            <div className='rate-calification__card'><img src="" alt="" /><div className='calification-card__text'><h2>A+</h2><p>OUT OF 17 REVIEWS</p></div></div>
                            <div className='rate-calification__card'><img src="" alt="" /><div className='calification-card__text'><h2>4.9</h2><p>OUT OF 109 REVIEWS</p></div></div>
                        </div>

                        <div className='header-rate-title'>

                            <div className='rate-title__container'>

                                <div className='header-rate-title__title'>
                                    <h3>Saenz Construction</h3>
                                    <h2>Pittsburgh Roofers</h2>
                                </div>

                                <div className='header-rate-title__body'>
                                    <p>If you want to boost the curb appeal, energy efficiency, and longevity of your Pittsburgh home, you don’t have to look far to find a roofing and exterior renovation company you can trust. Local residents have been relying on Saenz Construction since 2020—because they know we always put our customers first! Therefore, you can trust us to deliver exceptional results no matter your taste, budget, or needs.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>
            </header>
        </>
    )

}