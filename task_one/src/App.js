import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state = {
    names: [
      {name: 'Bartek'},
      {name: 'Artur'},
      {name: 'Michal'}
    ]
  }

  changeName = (event) =>{
    this.setState({
      names:[
        {name: event.target.value},
        {name: 'Artur'},
        {name: 'Michal'}
      ]
    })
  }

  render() {
    return (
      <div className="App">

        <div className='personCard'>
        <UserInput changed={this.changeName} name={this.state.names[0].name}/>
        <UserOutput name={this.state.names[0].name} />
        </div>

        <div className='personCard'>
        <UserInput />
        <UserOutput name={this.state.names[1].name}/>
        </div>

        <div className='personCard'>
        <UserInput />
        <UserOutput name={this.state.names[2].name}/>
        </div>

      </div>
    );
  }
}

export default App;
