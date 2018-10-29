import React, { Component } from 'react';
import List from './List';
import Item from './Item';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { key: '1', text: 'item 1' },
        { key: '2', text: 'item 2' },
        { key: '3', text: 'item 3' },
        { key: '4', text: 'item 4' },
        { key: '5', text: 'item 5' },
        { key: '6', text: 'item 6' },
        { key: '7', text: 'item 7' },
      ]
      ,
      currentItem: {
        key: '',
        text: ''
      },
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({ items: filteredItems })
  }

  addItem = event => {
    event.preventDefault()
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        <List addItem={this.addItem}/>
        <Item items={this.state.items} deleteItem={this.deleteItem} />

      </div>
    );
  }
}

export default App;