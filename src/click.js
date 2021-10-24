const pianoCodesWhite = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']']
const pianoCodesBlack = ['2', '3', '5', '6', '7', '9', '0', '=']
let listeners = []
function onMousedown(event){
    let key = event.target
    let note = document.getElementById(key.dataset.note)

    if(event.target.className === 'key key-w'){
        event.target.style.background = '#D6D6D6'
    }

    else if(event.target.className === 'key key-b'){
        event.target.style.background = '#555555'
    }
    note.currentTime = 0
    note.play()
}
function onMouseup(event){
    if(event.target.className === 'key key-w'){
        event.target.style.background = '#FFFFFF'
    }

    else if(event.target.className === 'key key-b'){
        event.target.style.background = '#000000'
    }

}
function onKeydown(event){

    let note = document.getElementById(event.key.toUpperCase())


    let pianoCode =''

    let name = event.key.toUpperCase()
    for(let i = 0; i<pianoCodesWhite.length;i++){
        if(pianoCodesWhite[i] === name){
            pianoCode = pianoCodesWhite[i]
        }
    }
    for(let i = 0; i<pianoCodesBlack.length;i++){
        if(pianoCodesBlack[i] === name){
            pianoCode = pianoCodesBlack[i]
        }
    }
    for(let i = 0; i<$els.length; i++){
        if(pianoCode === $els[i].dataset.note.toString()){

            listeners.push({
                name: $els[i],
                color: '#D6D6D6',
                mode: 'w'
            })
        }
    }
    for(let i = 0; i<$elems.length; i++){
        if(pianoCode === $elems[i].dataset.note.toString()){
            listeners.push({
                name: $elems[i],
                color: '#555555',
                mode: 'b'
            })
        }
    }
    for(let i = 0; i<listeners.length;i++){
        let operation = listeners[i].name
        operation.style.background = listeners[i].color
        note.currentTime = 0
        note.play()
    }

}
function onKeyup(event){
    for(let i = 0; i<listeners.length;i++){
       if(event.key.toUpperCase() === listeners[i].name.dataset.note && listeners[i].mode === 'w'){
           listeners[i].color = '#FFFFFF'
       }
       else if(event.key.toUpperCase() === listeners[i].name.dataset.note && listeners[i].mode === 'b'){
           listeners[i].color = '#000000'
       }
    }
    for(let i = 0; i<listeners.length;i++){
        let operation = listeners[i].name
        operation.style.background = listeners[i].color

    }
}

const $elements = document.getElementsByClassName("key")
let $els = document.getElementsByClassName('key-w')
let $elems = document.getElementsByClassName('key-b')
document.addEventListener('keydown', onKeydown)
document.addEventListener('keyup', onKeyup)
for(let i = 0; i<$elements.length; i++){
    $elements[i].addEventListener('mousedown', onMousedown)
}
for(let i = 0; i<$elements.length; i++){
    $elements[i].addEventListener('mouseup', onMouseup)
}

