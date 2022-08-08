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
    return {
        createBoard,
    }
})();

const Player = () => {

}

const gameFlow = (() => {

})();


GameBoard.createBoard();