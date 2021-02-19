import React, {useState} from 'react'
import Square from './Square'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    let status = 'Next player: ' + (xIsNext ? 'X' : 'O');

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (n) => {

        const grids = squares;
       
        if(calculateWinner(grids) || grids[n]){
            return;
        }
        
        grids[n]= xIsNext ? 'X' : 'O';
        setSquares(grids);
        setXIsNext(!xIsNext);
    }
    
    return (
        <div>
            <div className="status">{calculateWinner(squares)? `This is a winner : ${calculateWinner(squares)}`:status}</div>
            <div className="board-row">
               <Square value={squares[0]} onClick={() => handleClick(0)}/>
               <Square value={squares[1]} onClick={() => handleClick(1)}/>
               <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
               <Square value={squares[3]} onClick={() => handleClick(3)}/>
               <Square value={squares[4]} onClick={() => handleClick(4)}/>
               <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
               <Square value={squares[6]} onClick={() => handleClick(6)}/>
               <Square value={squares[7]} onClick={() => handleClick(7)}/>
               <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </div>
        </div>
    )
}

export default Board
