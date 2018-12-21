import React, { Component } from 'react';

class Item extends Component {
  render() {
    if(this.props.item) {
      const item = this.props.item
      return (
        <>
          <li key={item.key}>{item.text}</li>
        </>
      );
    }
    else {
      return(<></>)
    }
  }
}

export default Item;
