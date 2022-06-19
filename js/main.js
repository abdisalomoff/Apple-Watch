var elBtn = document.querySelector('.site-header__burgerbtn');
var elNav = document.querySelector('.site-header__nav');

elBtn.addEventListener('click', function(){
    elNav.classList.toggle("site-header__nav--open")
})
