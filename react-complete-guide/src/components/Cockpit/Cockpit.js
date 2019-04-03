import React from 'react';
import  './Cockpit.css';

const cockpit = (props) => {

  let btnClass = '';

  if(props.visable === true){
    btnClass = 'red';
  }

  const assignedClasses = [];
  let length = props.length;
  if ( length <= 2 ) {
    assignedClasses.push( 'red' ); // classes = ['red']
  }
  if ( length <= 1 ) {
    assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
  }


  return (
    <div className = 'Cockpit'>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join( ' ' )}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.click}>Toggle Persons</button>
    </div>
  );

}

export default cockpit;
