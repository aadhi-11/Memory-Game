import React from 'react'
import Square from '../square/Square';
import './Board.css'



const BoardFill = (num) => {
    const TotalComponents = [];
    for (let i = 0; i < num; i++) {
        TotalComponents.push(<Square key={`${i}`} />);
    }
    return <div className='row' >{TotalComponents}</div>

}

const Board = () => {
    

    return <div className="board">
        {BoardFill(5)}
    </div>;
};

export default Board