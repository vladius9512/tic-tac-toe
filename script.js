const gameBoard = (() => {

    const playerFactory = (number, value, turn) => {
        return {number, value, turn};
    };
    
    const player1 = playerFactory('player 1', 1, true);
    const player2 = playerFactory('player 2', 0, false);

    let winner = null;

    //board array
    let boxArr=[];

    //check if there is the win condition
    const isWin = (box) => {
        if(box[0] === 1 && box[1] === 1 && box[2] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[0] === 1 && box[3] === 1 && box[6] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[0] === 1 && box[4] === 1 && box[8] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[2] === 1 && box[4] === 1 && box[6] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[1] === 1 && box[4] === 1 && box[7] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[2] === 1 && box[5] === 1 && box[8] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[3] === 1 && box[4] === 1 && box[5] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[6] === 1 && box[7] === 1 && box[8] === 1)
        {
            winner = 1;
            return winner;
        }
        else if(box[0] === 0 && box[1] === 0 && box[2] === 0)
        {
            winner = 0;
            return winner;
        }
        else if(box[3] === 0 && box[4] === 0 && box[5] === 0)
        {
            winner = 0;
            return winner;
        }
        else if(box[6] === 0 && box[7] === 0 && box[8] === 0)
        {
            winner = 0;
            return winner;
        }
        else if(box[0] === 0 && box[4] === 0 && box[8] === 0)
        {
            winner = 0;
            return winner;
        }
        else if(box[2] === 0 && box[4] === 0 && box[6] === 0)
        {
            winner = 0;
            return winner;
        }
        else if(box[0] === 0 && box[3] === 0 && box[6] === 0)
        {
            winner = 0;
            return winner;
        }
        else if(box[1] === 0 && box[4] === 0 && box[7] === 0)
        {
            winner = 0;
            return winner;
        }
        else if(box[2] === 0 && box[5] === 0 && box[8] === 0)
        {
            winner = 0;
            return winner;
        }
    }
    //returns player options against who he wants to play against
    const gameType = (function () {
        const select = document.getElementById('levels');
        let type = select.options[select.selectedIndex].value;
        return type;
    });


    //Swaps turns between players
    const playerTurn = (function ()  {
        const cellElements = document.querySelectorAll('.box');
        const overlay = document.querySelector('.overlay');
        const winnerMessage = document.querySelector('.message');
    
        let turns = 0;
        const handleClick = (e) => {
            let boxNumber = parseInt(e.target.className[4]);
            const target = e.target;
            if(target.textContent==='X' || target.textContent==='0')
            {
                return;
            }
            turns ++;
            if(gameType() === 'player')
            {
                if(player1.turn === true && winner === null && target.textContent!=='0')
                {
                    target.textContent = "X";
                    target.style.color = '#FF4500';
                    boxArr[boxNumber] = player1.value;
                    player1.turn = false;
                    player2.turn = true;
                }
                else if (player2.turn === true && winner === null && target.textContent!=='X')
                {
                    target.textContent = "0";
                    target.style.color = '#FF4500';
                    boxArr[boxNumber] = player2.value;
                    player1.turn = true;
                    player2.turn = false;
                }
                
                if(turns>=5)
                {
                    if(isWin(boxArr) !=0 && isWin(boxArr) !=1 && turns !== 9)
                    {
                        return;
                    }
                    else if(turns === 9)
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "Is a draw!";
                        turns=0;
                    }
                    else if(isWin(boxArr) === 0)
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "0 wins!";
                        turns=0;
                    }
                    else 
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "X wins!";
                        turns=0;
                    }
                }
            }
            else if(gameType() === 'easy'){
                if(winner === null && target.textContent!=='X' && target.textContent!=='0')
                {
                    target.textContent = "X";
                    target.style.color = '#FF4500';
                    boxArr[boxNumber] = player1.value;
                    turns++;
                    [...cellElements].some ((cell) => {
                        if(cell.textContent!=='X' && cell.textContent!=='0')
                        {
                            boxArr[parseInt(cell.className[4])] = 0;
                            cell.textContent = "0";
                            cell.style.color = '#FF4500'
                            return true;
                        }
                        return false;
                    })
                }
                if(turns>=5)
                {
                    if(isWin(boxArr) !=0 && isWin(boxArr) !=1 && turns !== 9)
                    {
                        return;
                    }
                    else if(turns === 9)
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "Is a draw!";
                        turns=0;
                    }
                    else if(isWin(boxArr) === 0)
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "0 wins!";
                        turns=0;
                    }
                    else 
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "X wins!";
                        turns=0;
                    }
                }
            }
            else
            {
            if(winner === null && target.textContent!=='X' && target.textContent!=='0')
                {
                    target.textContent = 'X';
                    target.style.color = '#FF4500';
                    boxArr[boxNumber] = player1.value;
                    turns++;
                    console.log(turns);
                    let compMove = Math.floor(Math.random()*8)+1;
                    while(boxArr[compMove]!== undefined && turns<9)
                    {
                        compMove = Math.floor(Math.random()*8)+1;
                    }
                    boxArr[compMove] = 0;
                    cellElements.forEach (cell =>{
                        if(parseInt(cell.className[4]) === compMove)
                        {
                            cell.textContent = '0';
                            cell.style.color = '#FF4500';
                        }
                    })
            }
            if(turns>=5)
                {
                    if(isWin(boxArr) !=0 && isWin(boxArr) !=1 && turns !== 9)
                    {
                        return;
                    }
                    else if(turns === 9)
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "Is a draw!";
                        turns=0;
                    }
                    else if(isWin(boxArr) === 1)
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "X wins!";
                        turns=0;
                    }
                    else 
                    {
                        overlay.classList.add("show");
                        winnerMessage.textContent = "0 wins!";
                        turns=0;
                    }
                }
            }
        }
        cellElements.forEach (cell => {
            cell.addEventListener('click', handleClick)
        });
        return {cellElements, overlay, winnerMessage};
    })();

    const restartBtn = document.getElementById('restartButton');

    restartBtn.addEventListener('click', (e) =>{
        playerTurn.cellElements.forEach (cell => {
            cell.textContent='';
            cell.style.color = '#ADD8E6';
        })
        boxArr = [];
        player1.turn = true;
        player2.turn = false;
        playerTurn.overlay.classList.remove("show");
        winner = null;
    });
    
    
    
    return {playerTurn};
})();