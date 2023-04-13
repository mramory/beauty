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
const photos = document.querySelectorAll('.work__photos__item')
const popupContent = document.querySelector('.popup__content')
const popup = document.querySelector('.popup')
const imges = ['../img/work1.jpg', '../img/work2.jpg', '../img/work3.jpg', '../img/work4.jpg', '../img/work5.jpg', '../img/work6.jpg', '../img/work7.jpg', '../img/work8.jpg', '../img/work9.jpg']
for(let i = 0; i<photos.length; i++){
    photos[i].addEventListener('click',function omgg(){
        imgg = document.createElement('img')
        imgg.src=imges[i]
        popupContent.appendChild(imgg)
        popup.classList.add('popup__active')
        hggh = i 
    })
}
const popupClose = document.querySelector('.popup__close')
popupClose.addEventListener('click', function(){
    popup.classList.remove('popup__active')
    setTimeout(function(){
        popupContent.removeChild(imgg);
      }, 500)
})
const btnPrev = document.querySelector('.arrow__prev')
const btnNext = document.querySelector('.arrow__next')
btnPrev.addEventListener('click', function(){
    if(hggh==0){
        hggh=imges.length
        imgg.src = imges[--hggh]
    }
    else imgg.src = imges[--hggh]
})
btnNext.addEventListener('click', function(){
    if(hggh==photos.length-1){
        hggh=-1
        imgg.src = imges[++hggh]
    }
    else imgg.src = imges[++hggh]
})








