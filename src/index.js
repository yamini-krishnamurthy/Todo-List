import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddEntry from './AddEntry'

function ListItem(props) {
  return (
    <div>
      <div class="listItem" onClick={props.handleItem}>
        {props.value}
      </div>
      <button onClick={props.handleTrash}>
        Trash
      </button>
    </div>
  );
}


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };

    this.handleItem = this.handleItem.bind(this);
    this.handleTrash = this.handleTrash.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  renderListItem(e) {
    if(e.struck) {
      return (
        <ListItem
          key={e.key}
          value={<strike>{e.item}</strike>}
          handleTrash={() => this.handleTrash(e)}
          handleItem={() => this.handleItem(e)}
        />
      );
    }

    else {
     return(
      <ListItem
          key={e.key}
          value={e.item}
          handleTrash={() => this.handleTrash(e)}
          handleItem={() => this.handleItem(e)}
        />
      );
    }
  }

  handleAdd(e) {
    const entries = this.state.entries;
    entries.push({item: e, struck: false, key: entries.length});
    this.setState({
      entries: entries
    });
  }

  handleTrash(e) {
    const entries = this.state.entries;
    console.log(e);
    for(let i = 0; i < entries.length; i++) {
      if(entries[i] === e) {
        entries.splice(i, 1);
      }
    }

    this.setState({
      entries: entries
    });
  }

  handleItem(e) {
    const entries = this.state.entries;
    let index = entries.findIndex(ele => e.key === ele.key);
    entries[index].struck = !entries[index].struck;
    this.setState({
      entries: entries
    });
  }

  render() {
    return (
      <div>
        <div class="add-entry">
          <AddEntry handleAdd={this.handleAdd}/>
        </div>
        <div class="todo-list">
          {this.state.entries.map((e) => this.renderListItem(e))}
        </div>
      </div>
    );
  }

}


ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
