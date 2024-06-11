
import { useEffect, useState } from 'react';
import './Header.css'
import { navbarOpenMenu, navbarColor } from './HeaderLogic';

export default function Header() {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [source, setSource] = useState('')
    const [description, setDescription] = useState('')
    const [zip, setZip] = useState('')

    const [disabledForm, setDisabledForm] = useState(false)

    useEffect(() => {
        navbarColor()
        navbarOpenMenu()
    }, null)

    const handleContactForm = (e) => {
        e.preventDefault();

        const data = {
            fullName: fullName,
            email: email,
            phone: phone,
            address: address,
            source: source,
            description: description,
            zip: zip
        }

        sendEmail({ data, setDisabledForm });

    }

    /**
     * Function to improve the nav items behavior
     * @param {event} e - ignore the default behavior
     * @param {String} whereToMove move the screen window to that section
     */
    function navItemBehavior(e, whereToMove) {
        e.preventDefault();
        document.getElementById(whereToMove).scrollIntoView({ behavior: 'smooth' });

        //butons to hide
        const menuNavbar = document.getElementById("menu")
        const buttonCloseMenu = document.getElementById("close-menu")

        // button to show
        const buttonOpenMenu = document.getElementById("open-menu");

        // In case of mobile view, the menu is hidden
        if (window.matchMedia("(max-width: 1000px)").matches) {

            buttonCloseMenu.style.display = "none"
            menuNavbar.style.display = "none"
            buttonOpenMenu.style.display = "block"
        }
    }

    /**
     * Function to handle open menu button behavior
     * @param {event} e 
     */
    function openMenuHandler(e) {
        e.preventDefault();
        navbarOpenMenu();

        // Buttons for behavior of display menu
        const buttonOpenMenu = document.getElementById("open-menu");
        const buttonCloseMenu = document.getElementById("close-menu")
        const navbar = document.getElementById("navbarElement")
        navbarColor();

        // Menu for show
        const menuNavbar = document.getElementById("menu")

        buttonOpenMenu.style.display = "none";
        navbar.style.backgroundColor = "white"
        menuNavbar.style.display = "block"
        buttonCloseMenu.style.display = "block"
        buttonCloseMenu.style.margin = "25px 30px 25px auto"
    }

    return (
        <>
            <header>
                <section className='section-navbar' id='navbarElement'>

                    <div className='navbar__image' >
                        <img className='logo' src={'../icons/icon-web-saenz.png'} alt="Logo de la empresa" id='icon-navbar' />
                    </div>

                    <div className='section-navbar-elements'>

                        <div className='navbar__buttons'>
                            <p id='phone-number'>(412) 721-3612</p>
                            <button id='call-button'>Call</button>
                            <button id='free-quote-button'>
                                <a href="#get-free-quote">FREE QUOTE</a>
                            </button>
                        </div>

                        <div className='navbar-menu'>
                            <button onClick={(e) => { openMenuHandler(e) }} id='open-menu'>|||</button>
                            <div className='navbar__menu' id='menu'>
                                <button id='close-menu'>X</button>
                                <ul className='navbar__list'>
                                    <li><a href="#services" onClick={(e) => navItemBehavior(e, "services")} className='nav-button-item'>SERVICES</a></li>
                                    <li><a href="#mision" onClick={(e) => navItemBehavior(e, "mision")} className='nav-button-item'>MISION</a></li>
                                    <li><a href="#opinions" onClick={(e) => navItemBehavior(e, "opinions")} className='nav-button-item'>OPINIONS</a></li>
                                    <li><a href="#benefits" onClick={(e) => navItemBehavior(e, "benefits")} className='nav-button-item'>BENEFITS</a></li>
                                    <li><a href="#portfolio" onClick={(e) => navItemBehavior(e, "portfolio")} className='nav-button-item'>GALLERY</a></li>
                                    <li><a href="#about" onClick={(e) => navItemBehavior(e, "about")} className='nav-button-item'>ABOUT</a></li>
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

                        <form onSubmit={handleContactForm} className='header__form' id='get-free-quote'>

                            <h2>Get Started Now</h2>

                            <input disabled={disabledForm} value={fullName} name='Full Name' onChange={e => { setFullName(e.target.value) }} placeholder='Full Name' type='text' />
                            <input disabled={disabledForm} value={email} name='Email Address' onChange={e => { setEmail(e.target.value) }} placeholder='Email Address' type='email' />
                            <input disabled={disabledForm} value={phone} name='Phone Number' onChange={e => { setPhone(e.target.value) }} placeholder='Phone Number' type='text' />
                            <input disabled={disabledForm} value={address} name='Full Address' onChange={e => { setAddress(e.target.value) }} placeholder='Full Address' type='text' />
                            <select disabled={disabledForm} name="From Where heard about us" id="source-client" onChange={e => { setSource(e.target.value) }} >
                                <option value="none" selected disabled >How did you hear about us?</option>
                                <option value="Internet Search">Internet Search</option>
                                <option value="Referral">Referral</option>
                                <option value="Saenz Car">Saenz Car</option>
                                <option value="Flyer">Flyer</option>
                                <option value="Facebook">Facebook</option>
                            </select>
                            <textarea disabled={disabledForm} value={description} name='Proyect description' onChange={e => { setDescription(e.target.value) }} placeholder='Proyect Description' cols="30" rows="10"></textarea>
                            <input disabled={disabledForm} value={zip} name='ZIP code' onChange={e => { setZip(e.target.value) }} placeholder='ZIP Code' type="text" />

                            <button disabled={disabledForm} type="submit" value='enviar' >GET FREE QUOTE</button>

                        </form>
                    </div>

                    <div className='header-rate'>

                        <div className='header-rate__calification'>

                            <div className='rate-calification__card'><img src="../icons/social/rating-facebook.svg" alt="" /><div className='calification-card__text'><h2>4.9</h2><p>OUT OF 493 REVIEWS</p></div></div>
                            <div className='rate-calification__card'><img src="../icons/social/rating-google.svg" alt="" /><div className='calification-card__text'><h2>4.9</h2><p>OUT OF 99 REVIEWS</p></div></div>
                            <div className='rate-calification__card'><img src="../icons/social/rating-whatsapp.svg" alt="" /><div className='calification-card__text'><h2>A+</h2><p>OUT OF 17 REVIEWS</p></div></div>
                            <div className='rate-calification__card'><img src="../icons/social/rating-linkedin.svg" alt="" /><div className='calification-card__text'><h2>4.9</h2><p>OUT OF 109 REVIEWS</p></div></div>
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

/**
 * Method to send emails by calling php script file and return status code
 * @param {*} props 
 */
async function sendEmail(props) {

    const data = props.data;

    if (isValidForm(data)) {
        try {

            const response = await fetch('https://saenz-construction.com/server/sendMail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.status == 200) {
                alert("The message was sent successfully")
                props.setDisabledForm(true)
            }

        } catch (e) {
            console.log("Something Went Wrong!")
            props?.setResponse(500)
        }
    } else {
        props?.setResponse(400)
    }
}

function isValidForm(data) {

    if (isAnyEmptyField(data)) {
        alert('Please fill in all the fields.')
        return false
    }

    if (!isEmailValid(data.email)) {
        alert("Enter a valid email")
        return false
    }

    if (data.source === '' || data.source === 'none') {
        alert('Please select how did you hear about us')
        return false
    }

    if (descriptionExceedLimit(data.description)) {
        alert("Theres a limit of 350 characters, current size of " + data.description.length)
        return false
    }
    return true
}

function isEmailValid(email) {
    return /^(?=.{1,50}$)[A-Za-z0-9._%+-]+@.*/.test(email)
}

function isAnyEmptyField(data) {
    return (data.fullName === "" ||
        data.email === "" ||
        data.phone === "" ||
        data.address === "" ||
        data.description === "" ||
        data.zip === "")
}

function descriptionExceedLimit(text) {
    return (text.length > 350)
}