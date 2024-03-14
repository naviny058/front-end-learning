$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    
    });

let hambergerOpen = document.getElementById('hamberger-open')
let hambergerClose = document.getElementById('hamberger-close')
let mobile = document.querySelector('.mobile-view-links')

console.log(hambergerOpen);

hambergerOpen.addEventListener('click',function(){
    mobile.classList.add('mobile-open')
})

hambergerClose.addEventListener('click',function(){
    mobile.classList.remove('mobile-open')
})