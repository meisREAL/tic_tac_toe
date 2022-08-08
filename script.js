// gameBoard object with module
const GameBoard = (() => {

    let gameBoard = [
        [[''], [''], ['']],
        [[''], [''], ['']],
        [[''], [''], ['']]
    ];

    const createBoard = () => {
        let board = document.getElementById('gameBoard')
        for (let r = 0; r < gameBoard.length; r++) {
            for (let c = 0; c < gameBoard[r].length; c++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-index-number', `${r}-${c}`);
                board.append(cell);
            }
        }
    }

    const pushToBoard = () => {
        let cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            let index = cells[i].dataset.indexNumber.split('-')
            gameBoard[index[0]][index[1]] = cells[i].textContent
        }
    }

    return {
        createBoard,
        pushToBoard,
        gameBoard,
    }
})();

const Player = (name, mark) => {
    return { name, mark }
}

const player1 = Player('player-1', 'X');
const player2 = Player('player-2', 'O');

const gameFlow = (() => {
    let currentPlayer = player2;

    const checkPlayerTurn = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    }

    const markBoard = (cell) => {
        checkPlayerTurn();
        if (cell.target.textContent == 'X' || cell.target.textContent == 'O') {
            return;
        } else {
            cell.target.textContent = currentPlayer.mark;
        }
        GameBoard.pushToBoard();
    }

    const makeListeners = () => {
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', markBoard);
        });
    }

    return {
        makeListeners,
    }
})();


GameBoard.createBoard();
gameFlow.makeListeners();
