import React from 'react';


const validation = (props) =>{



  return (
    <div>
    {props.length < 5 ? <p>Text is to short</p> : <p>Text is long enough</p>}

    </div>
  )

}

export default validation
