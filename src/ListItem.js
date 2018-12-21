import React, { Component } from 'react';
import Item from './Item';

class ListItem extends Component {

  renderItem(item) {
    if (item) {
      return <Item item={item}/>
    }
  }

  render() {
    let listItems = this.props.listItems
    listItems = listItems.map(this.renderItem)
    return (
      <div className="listItem">
        {listItems}
      </div>
    );
  }
}

export default ListItem;
