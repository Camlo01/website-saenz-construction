
// Global variables to know the position of scroll
let position;
let referencePoint;

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

    // Update values for global varialbes of screen position
    position = window.pageYOffset;
    referencePoint = 0;;

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

            if (position == referencePoint) {
                navbar.style.backgroundColor = "transparent"
                // show open button
            }
            if (position > referencePoint) {
                navbar.style.backgroundColor = "white"
            }
            // Hide menu
            menuNavbar.style.display = "none"
        })
    }

}

function navbarColor() {

    const navbar = document.getElementById("navbarElement")

    if (position == referencePoint) {
        navbar.style.backgroundColor = "transparent";
    }
    if (position > referencePoint) {
        navbar.style.backgroundColor = "white";
    }

}



