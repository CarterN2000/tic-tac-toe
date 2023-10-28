const squareDetector = document.querySelectorAll('.cell')
let timeForX = true


//This function declares the reset button, and clears all sqaures
const button = document.querySelector('button')
button.addEventListener('click', function(){
    timeForX = true
    squareDetector.forEach(function(cell){
        cell.innerHTML = ''
    })
})
//Checks all of the sqaures to see if they are empty, then allows you to put an X or O
squareDetector.forEach(function(cell){
    cell.addEventListener('click', function(){
        if (cell.innerHTML === '') {
            if(timeForX === true) {
                cell.innerHTML = '<h1>X</h1>'
                timeForX = false
            }
            else if(timeForX === false) {
                cell.innerHTML = '<h1>O</h1>'
                timeForX = true
            }
        }
    })
})

//Wirte a function that detects a winner below, then add it to the event lsiter
