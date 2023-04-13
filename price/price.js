const scrollHelp = document.querySelector('.head__footer__content')


window.addEventListener('scroll', function(){
    scrollHelp.classList.add('scrolled')
})

const moreBtn = document.querySelector('.header__more')
const more = document.querySelector('.more__content')

moreBtn.addEventListener('click', function(){
    more.classList.add('more__content__active')
})

const more__close = document.querySelector('.more__close')
more__close.addEventListener('click', function(){
    more.classList.remove('more__content__active')
})