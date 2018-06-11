import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Input(props) {
  return (
    <div>
      <input/>
      <input/>
      <button>{props.button}</button>
    </div>
  )
}

class AddEntry extends React.Component {
  render() {
    return (
      <Input button="Add"/>
    );
  }
}

function ListItem(props) {
  return (
    <div>
        <input
          type="checkbox"
          onChange={props.handleChange} />
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
