const nav = document.querySelector('nav')
const ham = document.querySelector('.ham')
const dashboard = document.querySelector('.dashboard')

function toggleNav() {
    nav.classList.toggle('close')
    dashboard.classList.toggle('width')
}
ham.addEventListener('click', toggleNav)