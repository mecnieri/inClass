import React, { Component } from 'react';
import List from './List';
import Item from './Item';
import './App.css';

class App extends Component {
  itemInput = React.createRef()

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
  handleInput = event => {
    const text = event.target.value;
    const currentItem = {
      text, key: Date.now()

    }
    this.setState({
      currentItem,
    })
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({ items: filteredItems })
  }

  addItem = event => {
    event.preventDefault()
    const newValue = this.state.currentItem;
    console.log(event);
    if (newValue.text !== ' ') {
      const items = [...this.state.items, newValue]
      this.setState({
        items,
        currentItem: { key: '', text: '' },
      })
    }
  }

  render() {
    return (
      <div className="App">
        <List
          itemInput={this.itemInput}
          addItem={this.addItem}
          handleInput={this.handleInput} 
          currentItem={this.state.currentItem}
         />
        <Item items={this.state.items} deleteItem={this.deleteItem} />

      </div>
    );
  }
}

export default App;