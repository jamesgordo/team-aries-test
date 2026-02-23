document.addEventListener('DOMContentLoaded', () => {
    const statusDisplay = document.querySelector('#status');
    const statsDisplay = document.querySelector('#stats');
    const cells = document.querySelectorAll('.cell');
    const restartBtn = document.querySelector('#restart');

    const gameState = {
        board: Array(9).fill(null), // null, 'X', 'O'
        currentPlayer: 'X',
        gameActive: true,
        gamesPlayed: 0
    };

    const WINNING_CONDITIONS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    const winningMessage = () => `Player ${gameState.currentPlayer} Wins!`;
    const drawMessage = () => `Game Draw!`;
    const currentPlayerTurn = () => `Player ${gameState.currentPlayer}'s turn`;

    statusDisplay.innerHTML = currentPlayerTurn();

    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState.board[clickedCellIndex] !== null || !gameState.gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }

    function handleCellPlayed(clickedCell, clickedCellIndex) {
        gameState.board[clickedCellIndex] = gameState.currentPlayer;
        clickedCell.classList.add(gameState.currentPlayer.toLowerCase());
        clickedCell.innerText = gameState.currentPlayer;
    }

    function handleResultValidation() {
        let roundWon = false;
        let winningLine = [];

        for (let i = 0; i <= 7; i++) {
            const winCondition = WINNING_CONDITIONS[i];
            let a = gameState.board[winCondition[0]];
            let b = gameState.board[winCondition[1]];
            let c = gameState.board[winCondition[2]];

            if (a === null || b === null || c === null) {
                continue;
            }

            if (a === b && b === c) {
                roundWon = true;
                winningLine = winCondition;
                break;
            }
        }

        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();
            gameState.gameActive = false;
            highlightWinner(winningLine);
            updateGamesPlayed();
            return;
        }

        let roundDraw = !gameState.board.includes(null);
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameState.gameActive = false;
            updateGamesPlayed();
            return;
        }

        handlePlayerChange();
    }

    function updateGamesPlayed() {
        gameState.gamesPlayed++;
        statsDisplay.innerText = `Games Played: ${gameState.gamesPlayed}`;
    }

    function handlePlayerChange() {
        gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();
    }

    function highlightWinner(winningLine) {
        winningLine.forEach(index => {
            cells[index].classList.add('winning-cell');
        });
    }

    function restartGame() {
        gameState.gameActive = true;
        gameState.currentPlayer = "X";
        gameState.board = Array(9).fill(null);
        statusDisplay.innerHTML = currentPlayerTurn();
        cells.forEach(cell => {
            cell.innerText = "";
            cell.classList.remove('x');
            cell.classList.remove('o');
            cell.classList.remove('winning-cell');
        });
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartBtn.addEventListener('click', restartGame);
});
