const item = document.querySelector('.item') ;

const row = document.querySelector('.row').parentElement ;


item.addEventListener('dragstart' , dragstart ) ;
item.addEventListener('dragend' , dragend ) ;  

// for (const placeholder of placeholders) {
    row.addEventListener('dragover' , dragover) ;
    row.addEventListener('dragenter' , dragenter) ;
    row.addEventListener('dragleave' , dragleave) ;
    row.addEventListener('drop' ,dragdrop ) ;
// }



function dragstart(event) {
        event.target.classList.add('hold') ;
        setTimeout(() => event.target.classList.add('hide') ,0
        )
        item.addEventListener('dragstart' , ()=>item.classList.add('hide') )
    }
    
    function dragend(event) {
        event.target.classList.remove('hold') ;
        event.target.classList.remove('hide') ;
        
     }

function dragover (event){
     event.preventDefault() ;
}

function dragenter (event){
    if (event.target.closest('.placeholder')) {
    event.target.classList.add('hovered') ; 
}
}

function dragleave (event){
    if (event.target.closest('.placeholder')) {
    event.target.classList.remove('hovered') ;
    }
}

function dragdrop (event){
    if (event.target.closest('.placeholder')) {
    event.target.append(item) ;    
    // event.target.classList.remove('hovered' , 'hold' , 'hide'  ) ;
}
}



