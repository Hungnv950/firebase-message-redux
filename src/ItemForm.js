import React, { Component } from 'react';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {currentItem: { text: '', key: '' },}
  }
  handleInput(e) {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    console.log(currentItem)
    this.setState({
      currentItem,
    })
  }
  addItem(e) {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      this.setState({
        currentItem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className='todoListMain'>
        <form onSubmit={this.addItem.bind(this)}>
          <input placeholder='Item' type='text' name='item'
            value={this.state.currentItem.text}
            onChange={this.handleInput.bind(this)}
          />
          <button type='submit'> Add Item </button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
