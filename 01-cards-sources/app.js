
function slidesPlugin( activeSlide = 0 ){
const slides = document.querySelectorAll('.slide') ;

slides[activeSlide].classList.add('active') ;

// for (const slide of slides) {
//     slide.addEventListener('click' , () => {
//         clearActiveClasses() ;
//         slide.classList.toggle('active') ;
//     })
// }
const slider = document.querySelector('.container') ;

function clearActiveClasses () {
    slides.forEach((slide) =>{
        slide.classList.remove('active') ;
    } )
}

slider.addEventListener('click' , ev =>{
   
    clearActiveClasses () ;
    
    ev.target.classList.toggle('active') ;
    slider.style.background = ev.target.style.backgroundImage ; 
})

}

slidesPlugin( 2 ) ;

