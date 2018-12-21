import React, { Component } from 'react';
import Item from './Item';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {listItems: [{ text: '1', key: '1' }, { text: '2', key: '2' }, { text: '3', key: '3' }]}
  }

  renderItem(item) {
    console.log(item.text)
    if (item) {
      return <li key={item.key}>{item.text}</li>
    }
  }

  render() {
    let listItems = this.state.listItems
    listItems = listItems.map(this.renderItem)
    return (
      <div className="listItem">
        {listItems}
      </div>
    );
  }
}

export default ListItem;
