let cells = document.querySelectorAll('.cell');
let cellsArray;

document.addEventListener('DOMContentLoaded', function () {
    // let flag = true;
    document.addEventListener('click', function (event) {
        let clickCell = event.target;
        if (clickCell.textContent === ''){
            clickCell.append('X');
            clickCell.classList.add('x');
            bot();
            checkLineX();
            checkLine0();
        }
    })
})

let rowLength;

function checkLine0(){
    for (let i = 0; i < cells.length; i++){
        rowLength = Math.sqrt(cells.length);
        if(cells[0].classList.contains('null') && cells[1].classList.contains('null') && cells[2].classList.contains('null')){
            setTimeout(
                function (){
                    cells[0].style.backgroundColor = 'red';
                    cells[1].style.backgroundColor = 'red';
                    cells[2].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        }else if(cells[3].classList.contains('null') && cells[4].classList.contains('null') && cells[5].classList.contains('null')){
            setTimeout(
                function (){
                    cells[3].style.backgroundColor = 'red';
                    cells[4].style.backgroundColor = 'red';
                    cells[5].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        }else if(cells[6].classList.contains('null') && cells[7].classList.contains('null') && cells[8].classList.contains('null')){
            setTimeout(
                function (){
                    cells[6].style.backgroundColor = 'red';
                    cells[7].style.backgroundColor = 'red';
                    cells[8].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        } else if(cells[0].classList.contains('null') && cells[3].classList.contains('null') && cells[6].classList.contains('null')){
            setTimeout(
                function (){
                    cells[0].style.backgroundColor = 'red';
                    cells[3].style.backgroundColor = 'red';
                    cells[6].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        } else if(cells[1].classList.contains('null') && cells[4].classList.contains('null') && cells[7].classList.contains('null')){
            setTimeout(
                function (){
                    cells[1].style.backgroundColor = 'red';
                    cells[4].style.backgroundColor = 'red';
                    cells[7].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        }else if(cells[2].classList.contains('null') && cells[5].classList.contains('null') && cells[8].classList.contains('null')){
            setTimeout(
                function (){
                    cells[2].style.backgroundColor = 'red';
                    cells[5].style.backgroundColor = 'red';
                    cells[8].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        }else if(cells[0].classList.contains('null') && cells[4].classList.contains('null') && cells[8].classList.contains('null')){
            setTimeout(
                function (){
                    cells[0].style.backgroundColor = 'red';
                    cells[4].style.backgroundColor = 'red';
                    cells[8].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        }else if(cells[2].classList.contains('null') && cells[4].classList.contains('null') && cells[6].classList.contains('null')){
            setTimeout(
                function (){
                    cells[2].style.backgroundColor = 'red';
                    cells[4].style.backgroundColor = 'red';
                    cells[6].style.backgroundColor = 'red';
                    console.log('0 wins')
                } ,
                500
            )
        }
    }
}

function checkLineX(){
    for (let i = 0; i < cells.length; i++){
        rowLength = Math.sqrt(cells.length);
        if(cells[0].classList.contains('x') && cells[1].classList.contains('x') && cells[2].classList.contains('x')){
            setTimeout(
                function (){
                    cells[0].style.backgroundColor = 'blue';
                    cells[1].style.backgroundColor = 'blue';
                    cells[2].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        }else if(cells[3].classList.contains('x') && cells[4].classList.contains('x') && cells[5].classList.contains('x')){
            setTimeout(
                function (){
                    cells[3].style.backgroundColor = 'blue';
                    cells[4].style.backgroundColor = 'blue';
                    cells[5].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        }else if(cells[6].classList.contains('x') && cells[7].classList.contains('x') && cells[8].classList.contains('x')){
            setTimeout(
                function (){
                    cells[6].style.backgroundColor = 'blue';
                    cells[7].style.backgroundColor = 'blue';
                    cells[8].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        } else if(cells[0].classList.contains('x') && cells[3].classList.contains('x') && cells[6].classList.contains('x')){
            setTimeout(
                function (){
                    cells[0].style.backgroundColor = 'blue';
                    cells[3].style.backgroundColor = 'blue';
                    cells[6].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        } else if(cells[1].classList.contains('x') && cells[4].classList.contains('x') && cells[7].classList.contains('x')){
            setTimeout(
                function (){
                    cells[1].style.backgroundColor = 'blue';
                    cells[4].style.backgroundColor = 'blue';
                    cells[7].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        }else if(cells[2].classList.contains('x') && cells[5].classList.contains('x') && cells[8].classList.contains('x')){
            setTimeout(
                function (){
                    cells[2].style.backgroundColor = 'blue';
                    cells[5].style.backgroundColor = 'blue';
                    cells[8].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        }else if(cells[0].classList.contains('x') && cells[4].classList.contains('x') && cells[8].classList.contains('x')){
            setTimeout(
                function (){
                    cells[0].style.backgroundColor = 'blue';
                    cells[4].style.backgroundColor = 'blue';
                    cells[8].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        }else if(cells[2].classList.contains('x') && cells[4].classList.contains('x') && cells[6].classList.contains('x')){
            setTimeout(
                function (){
                    cells[2].style.backgroundColor = 'blue';
                    cells[4].style.backgroundColor = 'blue';
                    cells[6].style.backgroundColor = 'blue';
                    console.log('X wins')
                } ,
                500
            )
        }
    }
}

function bot(){
    let botCells = document.querySelectorAll('li:not(.x):not(.null)');
    let botCell = botCells[Math.floor(Math.random() * botCells.length)];
    checkLineX();
    checkLine0();
    botCell.classList.add('null');
    setTimeout(
        function (){
            botCell.append('0')
        } ,
        500
    )

    console.log(botCell)
}


// найти все элементы и положить в массив
//
