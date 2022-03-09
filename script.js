import Contacts from "./contacts.js";

const contactsInit = () => {
    const homeContacts = document.querySelector('.home-contacts')

    Contacts.map((item, index) => {
        homeContacts.innerHTML += `
            <a href="${item.url}" target="_blank" class="contact">
                <i class="${item.icon}"></i>
            </a>
        `
    })
}
contactsInit()

const Menu = () => {
    const navLinks = document.querySelector('.nav-links')

    const navBurger = document.querySelector('.nav-burger')
    const navClose = document.querySelector('.nav-close')

    navBurger.onclick = () => {
        navLinks.classList.add('on')
    }

    navClose.onclick = () => {
        navLinks.classList.remove('on')
    }

}
Menu()