import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../../helpers/checkWinner";

function Grid({numberOfCards}){
    const [board,setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); //ture = O, false = X
    const [winner, setWinner] = useState(null);

    function play(index){
        if(turn == true){
            board[index] = 'O';
        }else {
            board[index] = 'X'
        }

        const win = isWinner(board, turn ? "O":"X");

        if(win){
            setWinner(win)
        }
        setBoard([...board]);
        setTurn(!turn)
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }
    
    return(
        <div className="grid-wrapper"> 
            {
                winner && (
                    <>
                        <h1> Winner is {winner} </h1>
                        <button className="reset" onClick={reset}> Reset Game</button>
                    </>
                )
            }
            <h1>Current turn: {(turn) ? 'O':'X'}</h1>
            <div className="grid">
                {board.map((el,idx) => <Card key={idx} onPlay={play} player={el} index={idx} gameEnd={winner ? true : false}/> )}
            </div>   
        </div>
    );
}

export default Grid;