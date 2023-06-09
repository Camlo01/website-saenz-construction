// Change the styles to the navbar when the user scrolls a bit
window.addEventListener('scroll', function () {

    // get elements to apply styles 
    let icon = document.getElementById('icon-navbar');
    let navbar = document.getElementById('navbarElement')
    let navButtons = document.getElementsByClassName('nav-buttons')
    let phoneNumber = document.getElementById('phone-number')

    let position = window.pageYOffset;
    let referencePoint = 90;

    if (position <= referencePoint) {
        icon.style.width = '186px';
        icon.style.height = 'auto';
        icon.style.position = "fixed"
        navbar.style.backgroundColor = "transparent"
        phoneNumber.style.color = "var(--color-white)"

        // Iterate elements over navButtons and new color
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.color = "var(--color-white)"
        }

    } else {

        icon.style.width = '87px';
        navbar.style.backgroundColor = "white"
        phoneNumber.style.color = "var(--color-red)"
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.color = "//var(--color-blue-gray)"
        }
    }
});

