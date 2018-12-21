import React, { Component } from 'react';
import ListItem from './ListItem';
import Item from './Item';
import ItemForm from './ItemForm';

class App extends Component {
  constructor() {
    super()
    this.sate = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render() {
    return (
      <div className="App">
        <ItemForm/>
        <ListItem />
        <Item />
      </div>
    )
  }
}

export default App;
