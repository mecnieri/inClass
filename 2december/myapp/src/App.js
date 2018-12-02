import React, { Component } from 'react';
import './App.css';
import { throwStatement } from 'babel-types';


export const handleMinus = (prevState) => {
  return {
    count: prevState.count - 1
  }
}

export const handlePlus = (prevState) => {
  return {
    count: prevState.count + 1
  }
}

export const Value = ({ count }) => <h3>Count : {count}</h3>;


class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
    // this.onHandleMinus = this.onHandleMinus.bind(this)
    // this.handlePlus = this.handlePlus.bind(this)
  }


  handlePlus = () => {
    this.setState(handlePlus)
  }

  onHandleMinus = () => {
    this.setState(handleMinus)
  }

  render() {
    return (
      <div>
        <Value count={this.state.count} />
        <button onClick={this.handlePlus}> plus 1 </button>
        <br />
        <button onClick={this.onHandleMinus}> minus 1 </button>
        <br />
      </div >

    )
  }
}

export default App;