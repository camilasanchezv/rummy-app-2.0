const menuButton = document.getElementById('menu-button')
const menu = document.getElementById('menu')
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]
// const hide will be defined at the screen's script in case of needed

let open = false // this will determine if the menu is open or not

function closeSettings() {
    menu.style.width = '0';
    menuButton.style.color = '#00afb9'
    if (hide) hide.classList.remove('hide')
    open = false;
}

// open menu function
function openButton() {
    if (!open) {
        menu.style.width = '425px';
        menuButton.style.color = '#f07167'
        if (hide) hide.classList.add('hide')
        open = true;

        // add listener for closing menu
        main.addEventListener('click', closeMenu);
        footer.addEventListener('click', closeMenu);
    } else {
        closeSettings()
    }
}

// close menu function
function closeMenu() {
    closeSettings()

    // remove listener for closing menu
    main.removeEventListener('click', closeMenu);
    footer.removeEventListener('click', closeMenu);
}

menuButton.addEventListener('click', openButton)