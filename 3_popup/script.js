const btn = document.querySelector('#log')
const box = document.querySelector('.box-wrapper')
const clos = document.querySelector('.close')

function open() {
    box.classList.add('display')
}
function close() {
    box.classList.remove('display')
}
box.addEventListener('click', function (e) {
    if (e.target !== this) return
    close()
})
btn.addEventListener('click', open)

clos.addEventListener('click', close)