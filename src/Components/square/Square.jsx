import React,{useState} from 'react'
import './Squares.css'

const Square = () => {
  const [value,setValue]=useState(null)
  const randomGenerator = () =>{
    const val = Math.floor(Math.random() * 11);
    if(value===null)     setValue(val);
  }
  return (
    <div className='square'  onClick={randomGenerator} >
        <span style={{color:'white'}} >{value}</span> 
    </div>
  )
}

export default Square