const startBtn = document.querySelector('.start') ;

const screens =document.querySelectorAll('.screen') ;

const timeBtn = document.querySelector('.time-list') ;

const gameTime = document.querySelector('#time') ;

const board = document.querySelector('.board') ;

const colors = ['red' , 'blue' , 'yellow' , 'purple' , 'white'] ;


let time ;
let score = 0 ;
// document.addEventListener('click' , (event) => {
//     if (event.target.closest('.start')){
//         event.preventDefault() ;
//         screens[0].classList.add('up') ;

//     }
// })

startBtn.addEventListener('click' , (ev)=> {
    ev.preventDefault() ;
    screens[0].classList.add('up') ;
})

timeBtn.addEventListener('click' , (ev)=> {
    if (ev.target.closest('.time-btn')) {
        time = +ev.target.dataset.time ;
        screens[1].classList.add('up') ;
        startGame() ;
    }
    })

board.addEventListener('click' , ev=>{
    if(ev.target.closest('.circle')){
        score++ ;
        ev.target.remove () ;
        randomTarget() ;
    }
})
 
function startGame () {
    setInterval(timer , 1000) ;
    randomTarget() ;
    gameTime.innerHTML = `00:${time}` ;
}

function timer () {
    if ( time > 0){
        --time ;
        if (time <10) time = `0${time}` ;
        gameTime.innerHTML = `00:${time}` ;
    } else {
        finishGame() ;
    }
}

function finishGame () {
    board.innerHTML = `<h1>Cчет : <span class = "primary"> ${score}</span></h1>` ;
    gameTime.parentNode.classList.add('hide') ;
}

function randomTarget() {
    const target = document.createElement('div') ;
    let size = randomNumber(10 , 60) ;

    let colorIndex = randomNumber(0 , colors.length-1 ) ;

    target.style.backgroundColor = colors[colorIndex] ;
   
    const {width , height} = board.getBoundingClientRect() ;
    const x = randomNumber(0 , width-size) ;
    const y = randomNumber(0 , height-size) ;

    target.classList.add('circle') ;
    target.style.width = `${size}px` ;
    target.style.height = `${size}px` ;
    target.style.top = `${x}px` ;
    target.style.left = `${y}px` ;

    board.append(target) ;
}

function randomNumber(min = 0 , max) {
    return(Math.round(Math.random() * (max - min) + min) ) ;
}


