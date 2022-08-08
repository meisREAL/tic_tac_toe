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
    let running = true;
    let currentPlayer = player2;

    const checkPlayerTurn = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    }

    const markBoard = (cell) => {
        if (running) {
            checkPlayerTurn();
            if (cell.target.textContent == 'X' || cell.target.textContent == 'O') {
                return;
            } else {
                cell.target.textContent = currentPlayer.mark;
            }
            GameBoard.pushToBoard();
            checkWinCon();
        }
    }

    const checkWinCon = () => {
        let board = GameBoard.gameBoard;
        // for (let r = 0; r < board.length; r++) {
        //     for (let c = 0; c < board[r].length; c++) {
        //         if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != '') {
        //             console.log('win');
        //             running = false;
        //             break;
        //         } else if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != '') {
        //             console.log('win');
        //             running = false;
        //             break;
        //         } else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
        //             console.log('win');
        //             running = false;
        //             break;
        //         } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
        //             console.log('win');
        //             running = false;
        //             break;
        //         } else {
        //             return;
        //         }
        //     }
        // }
        for (let r = 0; r < 3; r++) {
            if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != '') {
                console.log('win');
                running = false;
                break;
            }
        }

        for (let c = 0; c < 3; c++) {
            if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != '') {
                console.log('win');
                running = false;
                break;
            }
        }

        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
            console.log('win');
            running = false;
        }

        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
            console.log('win');
            running = false;
        }
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
