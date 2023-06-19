
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
    // resetStylesWhenResize() //Method commented because it needs to be improved
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
export function navbarOpenMenu() {

    // Buttons for behavior of display menu
    const buttonOpenMenu = document.getElementById("open-menu");
    const buttonCloseMenu = document.getElementById("close-menu")
    const navbar = document.getElementById("navbarElement")
    // Menu for show
    const menuNavbar = document.getElementById("menu")


    if (window.matchMedia("(max-width: 1000px)").matches) {
        buttonOpenMenu.addEventListener('click', () => {

            buttonOpenMenu.style.display = "none";
            menuNavbar.style.display = "block"
            buttonCloseMenu.style.display = "block"
            buttonCloseMenu.style.margin = "25px 30px 25px auto"

        })

        buttonCloseMenu.addEventListener('click', () => {
            buttonOpenMenu.style.display = "block"
            navbar.style.display = "flex"

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

export function navbarColor() {

    const white = "#fff"
    const red = "var(--color-red)"
    const blue = "var(--color-blue-king)"
    const ligthGray = "var(--color-ligth-gray)"

    const navbar = document.getElementById("navbarElement")
    const icon = document.getElementById("icon-navbar")
    const phoneNumber = document.getElementById("phone-number")
    const navButtons = document.getElementsByClassName("nav-button-item")

    // Validate the screen position
    if (position == referencePoint || position <= referencePoint) {

        const closeMenuButton = document.getElementById('close-menu');
        const styleToValidate = window.getComputedStyle(closeMenuButton).getPropertyValue('display');
        const isMenuOpen = (styleToValidate == 'block')

        //if the menu is open, cannot apply styles when is on the top of the window
        if (!isMenuOpen) {
            navbar.style.backgroundColor = "transparent";
            phoneNumber.style.color = white
            icon.style.position = "absolute";

        }

        // Style only for big screens
        if (window.matchMedia("(min-width: 1000px)").matches) {
            icon.style.width = "340px";
        }

        // 
        if (window.matchMedia("(min-width: 1000px)").matches) {
            Array.from(navButtons).forEach(function (navItem) {
                navItem.style.color = white

                navItem.addEventListener("mouseover", function () {
                    navItem.style.color = blue;
                });

                navItem.addEventListener("mouseout", function () {
                    navItem.style.color = white;
                });

            });

        } else {
            Array.from(navButtons).forEach(function (navItem) {
                navItem.style.color = ligthGray

                navItem.addEventListener("mouseover", function () {
                    navItem.style.color = blue;
                });

                navItem.addEventListener("mouseout", function () {
                    navItem.style.color = ligthGray;
                });

            });
        }

    }

    // Validate the screen position
    if (position > referencePoint) {
        navbar.style.backgroundColor = white;
        phoneNumber.style.color = red
        if (window.matchMedia("(min-width: 1000px)").matches) {
            icon.style.width = "210px";
        }
        Array.from(navButtons).forEach(function (navItem) {
            navItem.style.color = ligthGray

            navItem.addEventListener("mouseover", function () {
                navItem.style.color = blue;
            });

            navItem.addEventListener("mouseout", function () {
                navItem.style.color = ligthGray;
            });

        });
    }

}

/**
 * Function -> reset the styles to the elemets when resize the screen
 */
function resetStylesWhenResize() {
    const openMenuButton = document.getElementById("open-menu");
    const closeMenuButton = document.getElementById("close-menu");
    const menu = document.getElementById('menu');

    // Big screen styles
    if (window.matchMedia("(min-width:1000px)").matches) {
        closeMenuButton.style.display = 'none'
        openMenuButton.style.display = 'none'
        menu.style.display = 'block'

        // Small screen styles
    } else {
        const icon = document.getElementById('icon-navbar');

        menu.style.display = 'none'
        closeMenuButton.style.display = 'none'
        openMenuButton.style.display = 'block'
        icon.style.width = '130px'
    }

}