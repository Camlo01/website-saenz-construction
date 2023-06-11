
import './Header.css'
import './HeaderLogic'

export default function Header() {

    return (
        <>
            <header>
                <section className='section-navbar' id='navbarElement'>
                    <div className='navbar__image' >
                        <img src={'website-icon-nav.png'} alt="Logo de la empresa" id='icon-navbar' />
                    </div>
                    <div className='navbar__options'>
                        <div className='navbar__phone'>
                            <p id='phone-number'>(724) 554-6224</p>
                            <button>FREE QUOTE</button>
                        </div>
                        <div className='navbar__nav'>
                            <ul>
                                <li><a href="" className='nav-button-item'>ROOFING</a></li>
                                <li><a href="" className='nav-button-item'>SIDING</a></li>
                                <li><a href="" className='nav-button-item'>GUTTERS & DOWNSPOUT</a></li>
                                <li><a href="" className='nav-button-item'>FINANCING</a></li>
                                <li><a href="" className='nav-button-item'>INSURE CLAIMS</a></li>
                                <li><a href="" className='nav-button-item'>COLOR SELECTION</a></li>
                                <li><a href="" className='nav-button-item'>GALLERY</a></li>
                                <li><a href="" className='nav-button-item'>ABOUT</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='header'>
                    <div className='header__items-container'>
                        <div className='header__title'>
                            <h1>Your Trusted Pittsburgh Roofing Company</h1>
                            <p>Our experienced roofing and exterior renovation contractors are experts in roof replacement, residential siding, new gutters and more!</p>
                            <div className='header__google-reviews'>
                                {/* Empty  */}
                            </div>
                        </div>
                        <div className='header__form'>
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
                            <div className='header-rate-title__title'>
                                <h3>Buccos Roofing</h3>
                                <h2>Pittsburgh Roofers</h2>
                            </div>
                            <div className='header-rate-title__body'>
                                <p>If you want to boost the curb appeal, energy efficiency, and longevity of your Pittsburgh home, you don’t have to look far to find a roofing and exterior renovation company you can trust. Local residents have been relying on Buccos Roofing since 2012—because they know we always put our customers first! Therefore, you can trust us to deliver exceptional results no matter your taste, budget, or needs.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )

}