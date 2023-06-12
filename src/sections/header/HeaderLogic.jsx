
/**
 * When the page finished loading
 */
window.onload = () => {
    navbarColor()
    navbarOpenMenu()
}

/** 
 * When the screen size changes
 */
window.onresize = () => {
    navbarColor()
    navbarOpenMenu()
}


window.onscroll = () => {
    navbarColor()
}


/**
 * Configraution for the navbar according the screen size
 */
function navbarOpenMenu() {

    // Buttons for behavior of display menu
    const buttonOpenMenu = document.getElementById("open-menu");
    const buttonCloseMenu = document.getElementById("close-menu")
    const navbar = document.getElementById("navbarElement")
    // Menu for show
    const menuNavbar = document.getElementById("menu")

    if (window.matchMedia("(max-width: 1000px)").matches) {
        buttonOpenMenu.addEventListener('click', () => {

            buttonOpenMenu.style.display = "none";
            navbar.style.backgroundColor = "white"


            menuNavbar.style.display = "block"

        })

        buttonCloseMenu.addEventListener('click', () => {
            buttonOpenMenu.style.display = "block"

            navbar.style.backgroundColor = "transparent"
            // show open button

            // Hide menu
            menuNavbar.style.display = "none"
        })
    }

}

function navbarColor() {

    const navbar = document.getElementById("navbarElement")

    let position = window.pageYOffset;
    let referencePoint = 0;

    if (position == referencePoint) {
        navbar.style.backgroundColor = "transparent";
    }
    if (position > referencePoint) {
        navbar.style.backgroundColor = "white";
    }

}



