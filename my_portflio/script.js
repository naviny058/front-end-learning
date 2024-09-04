const lines = document.querySelector('#hamberger-open')
const cross = document.querySelector('#hamberger-close')

function showLinks() {
    const click = document.querySelector('.clicks')
    click.classList.remove('transform')
}
function hideLinks() {
    const click = document.querySelector('.clicks')
    click.classList.add('transform')
}
lines.addEventListener('click', showLinks)
cross.addEventListener('click', hideLinks)