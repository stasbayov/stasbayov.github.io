let cell = document.querySelectorAll('.cell');

document.addEventListener('DOMContentLoaded', function () {
    let flag = true;
    document.addEventListener('click', function (event) {
        let clickCell = event.target;
        console.log(cell);
        if (clickCell.textContent === ''){
            if(flag === false){
                clickCell.append('0');
                clickCell.classList.add('null');
                flag = true;
                checkLine0();
            }
            else{
                clickCell.append('X');
                clickCell.classList.add('x');
                flag = false;
                checkLineX();
            }
        }
    })
})

let rowLength;

function checkLine0(){
    for (let i = 0; i < cell.length; i++){
        rowLength = Math.sqrt(cell.length);
        if(cell[0].classList.contains('null') && cell[1].classList.contains('null') && cell[2].classList.contains('null')){
            cell[0].style.backgroundColor = 'red';
            cell[1].style.backgroundColor = 'red';
            cell[2].style.backgroundColor = 'red';
            console.log('0 wins')
        }else if(cell[3].classList.contains('null') && cell[4].classList.contains('null') && cell[5].classList.contains('null')){
            cell[3].style.backgroundColor = 'red';
            cell[4].style.backgroundColor = 'red';
            cell[5].style.backgroundColor = 'red';
            console.log('0 wins')
        }else if(cell[6].classList.contains('null') && cell[7].classList.contains('null') && cell[8].classList.contains('null')){
            cell[6].style.backgroundColor = 'red';
            cell[7].style.backgroundColor = 'red';
            cell[8].style.backgroundColor = 'red';
            console.log('0 wins')
        } else if(cell[0].classList.contains('null') && cell[3].classList.contains('null') && cell[6].classList.contains('null')){
            cell[0].style.backgroundColor = 'red';
            cell[3].style.backgroundColor = 'red';
            cell[6].style.backgroundColor = 'red';
            console.log('0 wins')
        } else if(cell[1].classList.contains('null') && cell[4].classList.contains('null') && cell[7].classList.contains('null')){
            cell[1].style.backgroundColor = 'red';
            cell[4].style.backgroundColor = 'red';
            cell[7].style.backgroundColor = 'red';
            console.log('0 wins')
        }else if(cell[2].classList.contains('null') && cell[5].classList.contains('null') && cell[8].classList.contains('null')){
            cell[2].style.backgroundColor = 'red';
            cell[5].style.backgroundColor = 'red';
            cell[8].style.backgroundColor = 'red';
            console.logt('0 wins')
        }else if(cell[0].classList.contains('null') && cell[4].classList.contains('null') && cell[8].classList.contains('null')){
            cell[0].style.backgroundColor = 'red';
            cell[4].style.backgroundColor = 'red';
            cell[8].style.backgroundColor = 'red';
            console.log('0 wins')
        }else if(cell[2].classList.contains('null') && cell[4].classList.contains('null') && cell[6].classList.contains('null')){
            cell[2].style.backgroundColor = 'red';
            cell[4].style.backgroundColor = 'red';
            cell[6].style.backgroundColor = 'red';
            console.log('0 wins')
        }
    }
}

function checkLineX(){
    for (let i = 0; i < cell.length; i++){
        rowLength = Math.sqrt(cell.length);
        if(cell[0].classList.contains('x') && cell[1].classList.contains('x') && cell[2].classList.contains('x')){
            cell[0].style.backgroundColor = 'blue';
            cell[1].style.backgroundColor = 'blue';
            cell[2].style.backgroundColor = 'blue';
            console.log('X wins')
        }else if(cell[3].classList.contains('x') && cell[4].classList.contains('x') && cell[5].classList.contains('x')){
            cell[3].style.backgroundColor = 'blue';
            cell[4].style.backgroundColor = 'blue';
            cell[5].style.backgroundColor = 'blue';
            console.log('X wins')
        }else if(cell[6].classList.contains('x') && cell[7].classList.contains('x') && cell[8].classList.contains('x')){
            cell[6].style.backgroundColor = 'blue';
            cell[7].style.backgroundColor = 'blue';
            cell[8].style.backgroundColor = 'blue';
            console.log('X wins')
        } else if(cell[0].classList.contains('x') && cell[3].classList.contains('x') && cell[6].classList.contains('x')){
            cell[0].style.backgroundColor = 'blue';
            cell[3].style.backgroundColor = 'blue';
            cell[6].style.backgroundColor = 'blue';
            console.log('X wins')
        } else if(cell[1].classList.contains('x') && cell[4].classList.contains('x') && cell[7].classList.contains('x')){
            cell[1].style.backgroundColor = 'blue';
            cell[4].style.backgroundColor = 'blue';
            cell[7].style.backgroundColor = 'blue';
            console.log('X wins')
        }else if(cell[2].classList.contains('x') && cell[5].classList.contains('x') && cell[8].classList.contains('x')){
            cell[2].style.backgroundColor = 'blue';
            cell[5].style.backgroundColor = 'blue';
            cell[8].style.backgroundColor = 'blue';
            console.log('X wins')
        }else if(cell[0].classList.contains('x') && cell[4].classList.contains('x') && cell[8].classList.contains('x')){
            cell[0].style.backgroundColor = 'blue';
            cell[4].style.backgroundColor = 'blue';
            cell[8].style.backgroundColor = 'blue';
            console.log('X wins')
        }else if(cell[2].classList.contains('x') && cell[4].classList.contains('x') && cell[6].classList.contains('x')){
            cell[2].style.backgroundColor = 'blue';
            cell[4].style.backgroundColor = 'blue';
            cell[6].style.backgroundColor = 'blue';
            console.log('X wins')
        }
    }
}
