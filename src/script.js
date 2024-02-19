const openMenu = document.querySelector('.open-menu')
const mobileMenu = document.querySelector('.mobile_menu')

openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-y-[-150%]')
})