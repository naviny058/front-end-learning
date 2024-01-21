const ham = document.querySelector('.ham')
const close = document.querySelector('.close')
const show = document.querySelector('.show')

ham.addEventListener('click', function () {
    show.classList.toggle('translate-y-[-100%]')
})

close.addEventListener('click', function () {
    show.classList.toggle('translate-y-[-100%]')
})

// todo
// on click of outside the nav the nav should close 
show.addEventListener('click', function (event) {

},);