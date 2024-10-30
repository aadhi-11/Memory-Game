import React from 'react';
import Square from '../square/Square';
import './Board.css';

const BoardFill = ({ num }) => {  
    const TotalComponents = [];
    for (let i = 0; i < num; i++) {
        TotalComponents.push(<Square key={`${i}`} />);
    }
    return <div className='row'>{TotalComponents}</div>;
};

const mappedBoard = (num) => {
    const component = [];
    for (let i = 0; i < num; i++) {
        component.push(<BoardFill key={`row-${i}`} num={num} />);  
    }
    return <div className="Board">{component}</div>;
};

const Board = () => {
    return (
        <>
            {mappedBoard(4)}
        </>
    );
};

export default Board;
