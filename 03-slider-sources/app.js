const upBtn = document.querySelector('.up-button') ;
const downBtn = document.querySelector('.down-button') ;
const sidebar = document.querySelector('.sidebar') ;
const mainSlide = document.querySelector('.main-slide') ;
const mainSlideLength = mainSlide.children.length ;
const containerHeight = document.querySelector('.container').clientHeight ;


let currentSlide = 0 ;

sidebar.style.top = ` -${(mainSlideLength-1)*100}vh ` ;


upBtn.addEventListener('click', () => {
    changeSlides ('up') ;
})



downBtn.addEventListener('click', () => {
    changeSlides ('down') ;
    
})

function changeSlides (direction) {
    if (direction === 'up') {
        if (currentSlide != mainSlideLength-1){
            currentSlide++ ;
        } else {
            currentSlide = 0 ;
        }
        
       } else if (direction === 'down') {
                if (currentSlide != 0) {
                currentSlide-- ;
                } else {
                    currentSlide = mainSlideLength-1 ;
                }
}


mainSlide.style.transform = `translateY(-${currentSlide*containerHeight}px)` ;
sidebar.style.transform = `translateY(${currentSlide*containerHeight}px)` ;

}