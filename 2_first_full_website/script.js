const ham = document.querySelector('.hamburger-button')
const links = document.querySelector('.links')

console.log(ham, links);
ham.addEventListener('click', function () {
    links.classList.toggle('dis')
})