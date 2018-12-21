import React, { Component } from 'react';

class ItemForm extends Component {

  render() {
    return (
      <div className='todoListMain'>
        <form onSubmit={this.props.addItem}>
          <input placeholder='Item' type='text' name='item'
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
          />
          <button type='submit'> Add Item </button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
