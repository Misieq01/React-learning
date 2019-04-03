import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputValue: '',
    inputTextLength: 0,
    chars: []
  };

  inputChangeHandler = (event) => {
    const values = {...this.state};
    let {text,length,char} = values
    text = event.target.value;
    length = text.length;
    char = text.split("");
    this.setState({
      inputValue: text,
      inputTextLength: length,
      chars: char
    });
  };

  removeCharHandler = (charIndex) =>{
    let text = [...this.state.chars];
    text.splice(charIndex, 1);
    let b = text.join('');
    let length = text.length
    this.setState({
      inputValue: b,
      inputTextLength: length,
      chars: text

    });
  };

  render() {
    let chars = (
      <div>
        {
          this.state.chars.map((char,index) => {
            return <Char char={char}  key={index} click={()=>this.removeCharHandler(index)} />
          })
        }
      </div>
    );



    return (
      <div className="App">
        <input type='text' onChange={(event)=>this.inputChangeHandler(event)} value={this.state.inputValue}/>
        <p>{this.state.inputTextLength}</p>
        <Validation length={this.state.inputTextLength} />
        {chars}
      </div>
    );
  }
}

export default App;
