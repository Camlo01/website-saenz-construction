
import './Header.css'

export default function Header() {

    return (
        <>
            <header>
                <section className='navbar'>
                    <div className='navbar__image'>
                        <img src='../src/assets/images/website-icon-nav.png' alt="Logo de la empresa" />
                    </div>
                    <div className='navbar__options'>
                        <div className='navbar__phone'>
                            <p>(724) 554-6224</p>
                            <button>FREE QUOTE</button>
                        </div>
                        <nav className='navbar__nav'>
                            <ul>
                                <li><a href="">ROOFING</a></li>
                                <li><a href="">SIDING</a></li>
                                <li><a href="">GUTTERS & DOWNSPOUT</a></li>
                                <li><a href="">FINANCING</a></li>
                                <li><a href="">INSURE CLAIMS</a></li>
                                <li><a href="">COLOR SELECTION</a></li>
                                <li><a href="">GALLERY</a></li>
                                <li><a href="">ABOUT</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className='header'>
                    <div className='header__title'>
                    </div>
                    <div className='header__form'></div>
                </section>
            </header>
        </>
    )

}