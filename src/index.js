import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: ""
    };

    this.handleItemEnter = this.handleItemEnter.bind(this);
  }

  handleItemEnter(e) {
    this.setState({
      itemName: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.itemName}
          onClick={this.handleItemEnter}
        />
        <button
          onClick={() => this.props.buttonClick(this.state.itemName)}>
          {this.props.value}
        </button>
      </div>
    );
  }
}

function AddEntry(props) {
  return (
    <Input value="Add" buttonClick={props.addEntry} />
  );
}

function ListItem(props) {
  return (
    <div>
        <input
          type="checkbox"
          onChange={props.handleChange}
    />
        {props.value}
    </div>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [{item: "Eat", checked:false}, {item: "Exercise", checked:false}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  handleChange(e) {
    const entries = this.state.entries;
    let index = entries.indexOf(e);
    entries[index].checked = !e.checked;
    entries[index].item = entries[index].checked ? <strike>{e.item}</strike> : e.item;
    this.setState({
      entries: entries
    });
  }

  addEntry(item) {
    const entries = this.state.entries;
    entries.push({item: item, checked: false});
    this.setState({
      entries: entries
    });
  }

  renderItem(e) {
    return (
      <ListItem
        value={e.item}
        onChange={this.handleChange}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="add-entry">
          <AddEntry />
        </div>
        <div className="list">
          {this.state.entries.map((e) => this.renderItem(e))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
