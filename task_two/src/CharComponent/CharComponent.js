import React from 'react';
import './char.css'


const char = (props) =>{

  return (
    <div className='root' onClick={props.click}>
    {props.char}
    </div>
  )

}

export default char
