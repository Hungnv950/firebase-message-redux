import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '1', key: '1' }
  }

  render() {
    return (
      <>
        <li>{this.state.text}</li>
      </>
    );
  }
}

export default Item;
