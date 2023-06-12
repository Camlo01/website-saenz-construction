window.onload = function () {


    // get elements to apply styles 
    let icon = document.getElementById('icon-navbar');
    let navbar = document.getElementById('navbarElement')
    let navButtons = document.getElementsByClassName('nav-button-item')
    let phoneNumber = document.getElementById('phone-number')

    let position = window.pageYOffset;
    let referencePoint = 0;

    if (position == referencePoint) {
        icon.style.width = '186px';
        icon.style.height = 'auto';
        icon.style.position = "fixed"
        navbar.style.backgroundColor = "transparent"
        navbar.style.paddingBottom = "10px"
        navbar.style.borderBottom = ""
        phoneNumber.style.color = "var(--color-white)"

        // Iterate elements over navButtons and new color
        for (let i = 0; i < navButtons.length; i++) {

            navButtons[i].style.color = "var(--color-white)"

            navButtons[i].addEventListener('mouseover', function () {
                navButtons[i].style.color = 'black';
            });

            navButtons[i].addEventListener('mouseout', function () {
                navButtons[i].style.color = 'white';
            });

        }

    }

    if (position > referencePoint) {

        icon.style.width = '87px';
        navbar.style.backgroundColor = "white"
        navbar.style.paddingBottom = "7px"
        navbar.style.borderBottom = "solid 1px #dbdada"
        phoneNumber.style.color = "var(--color-red)"
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.color = "var(--color-blue-gray)"

            navButtons[i].addEventListener('mouseover', function () {
                navButtons[i].style.color = 'gray';
            });

            navButtons[i].addEventListener('mouseout', function () {
                navButtons[i].style.color = 'black';
            });

        }
    }

    // Change the styles to the navbar when the user scrolls a bit
    window.addEventListener('scroll', function () {


        // get elements to apply styles 
        let icon = document.getElementById('icon-navbar');
        let navbar = document.getElementById('navbarElement')
        let navButtons = document.getElementsByClassName('nav-button-item')
        let phoneNumber = document.getElementById('phone-number')

        let position = window.pageYOffset;
        let referencePoint = 0;

        if (position == referencePoint) {
            icon.style.width = '186px';
            icon.style.height = 'auto';
            icon.style.position = "fixed"
            navbar.style.backgroundColor = "transparent"
            navbar.style.paddingBottom = "10px"
            navbar.style.borderBottom = ""
            phoneNumber.style.color = "var(--color-white)"

            // Iterate elements over navButtons and new color
            for (let i = 0; i < navButtons.length; i++) {

                navButtons[i].style.color = "var(--color-white)"

                navButtons[i].addEventListener('mouseover', function () {
                    navButtons[i].style.color = 'black';
                });

                navButtons[i].addEventListener('mouseout', function () {
                    navButtons[i].style.color = 'white';
                });

            }

        }

        if (position > referencePoint) {

            icon.style.width = '87px';
            navbar.style.backgroundColor = "white"
            navbar.style.paddingBottom = "7px"
            navbar.style.borderBottom = "solid 1px #dbdada"
            phoneNumber.style.color = "var(--color-red)"
            for (let i = 0; i < navButtons.length; i++) {
                navButtons[i].style.color = "var(--color-blue-gray)"

                navButtons[i].addEventListener('mouseover', function () {
                    navButtons[i].style.color = 'gray';
                });

                navButtons[i].addEventListener('mouseout', function () {
                    navButtons[i].style.color = 'black';
                });

            }
        }
    });

    const buttonOpenMenu = document.getElementById("open");
    const buttonCall = document.getElementById('call-button')
    const buttonClose = document.getElementById('close')
    const buttonNavbar = document.getElementById('navbar')
    const sectionNavbar = document.getElementById('navbarElement')

    buttonOpenMenu.addEventListener('click', function () {
        buttonNavbar.style.opacity = 1;
        buttonNavbar.style.visibility = "visible";
        buttonCall.style.display = "none";
        buttonOpenMenu.style.display = "none";
        buttonClose.style.display = "block";
        sectionNavbar.style.backgroundColor = "white";
    })

    buttonClose.addEventListener('click', function () { 
        
        buttonNavbar.style.opacity = 0;
        buttonNavbar.style.visibility = "hidden";
        buttonCall.style.display = "block";
        buttonOpenMenu.style.display = "block";
        buttonClose.style.display = "none";
        sectionNavbar.style.backgroundColor = "transparent";

    })
}

