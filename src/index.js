import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddEntry from './AddEntry'
import 'font-awesome/css/font-awesome.min.css';

function ListItem(props) {
  return (
    <li className={`${props.styleName}`} onClick={props.handleItem}>
      <span class="item-name font">
        {props.value}
      </span>
      <button id="trash-button" onClick={props.handleTrash}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
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
          styleName="struck"
          key={e.key}
          value={<strike>{e.item}</strike>}
          handleTrash={(event) => this.handleTrash(event, e)}
          handleItem={() => this.handleItem(e)}
        />
      );
    }

    else {
      return(
        <ListItem
          styleName="unstruck"
          key={e.key}
          value={e.item}
          handleTrash={(event) => this.handleTrash(event, e)}
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

  handleTrash(event, e) {
    event.stopPropagation();
    const entries = this.state.entries;
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
    console.log("hi");
    const entries = this.state.entries;
    let index = entries.findIndex(ele => e.key === ele.key);
    entries[index].struck = !entries[index].struck;
    this.setState({
      entries: entries
    });
  }

  render() {
    return (
      <div class="todo-list">
        <h2>todo list.</h2>
        <AddEntry handleAdd={this.handleAdd}/>
        <ul>{this.state.entries.map((e) => this.renderListItem(e))}</ul>
      </div>
    );
  }

}


ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
