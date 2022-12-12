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
            winner = 'player1';
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


    const cellElements = document.querySelectorAll('.box');
    
    let turns = 0;
    const handleClick = (e) => {
        let boxNumber = parseInt(e.target.className[4]);
        turns ++;
        const target = e.target;
            if(player1.turn === true && winner === null && target.textContent ==="")
            {
                target.classList.add("cross");
                boxArr[boxNumber] = player1.value;
                player1.turn = false;
                player2.turn = true;
            }
            else if (player2.turn === true && winner === null && target.textContent==="")
            {
                target.classList.add("zero");
                boxArr[boxNumber] = player2.value;
                player1.turn = true;
                player2.turn = false;
            }
        
        if(turns>=5)
        {
            isWin(boxArr);
        }
    }
    cellElements.forEach (cell => {
        cell.addEventListener('click', handleClick, { once: true})
    });

    //Swaps turns between players
    const playerTurn = (function ()  {
        console.log('aaaa');
    });

    
    
    
    return {playerTurn};
})();

