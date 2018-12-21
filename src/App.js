import React, { Component } from 'react';
import ListItem from './ListItem';
import Item from './Item';
import ItemForm from './ItemForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [{ text: 'Ăn sáng', key: '1' }, { text: 'Ăn trưa', key: '2' }, { text: 'Ăn tối', key: '3' }],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <ItemForm
          handleInput={this.handleInput.bind(this)}
          addItem={this.addItem.bind(this)}
          currentItem={this.state.currentItem}
        />
        <ListItem listItems={this.state.items} />
        <Item />
      </div>
    )
  }
}

export default App;
