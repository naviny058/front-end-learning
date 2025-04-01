let myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.querySelectorAll(".test");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

const ham = document.querySelector('#hamberger-open')

function openCloseHam() {
    const links = document.querySelector('.links')
    links.classList.toggle("hide")
}
ham.addEventListener('click', openCloseHam)