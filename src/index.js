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
          onClick={props.handleClick} />
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
  }

  renderItem(e, i) {
    let text= this.state.entries[i].checked ? <strike>{this.state.entries[i].item}</strike> : this.state.entries[i].item;
    return (
      <ListItem 
        value={text}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const entries = this.state.entries.slice();
    entries[i].checked = !entries[i].checked;
    this.setState({
      entries: entries
    });
  }

  render() {
    return (
      <div>
        <div className="add-entry">
          <AddEntry />
        </div>

        <div className="list">
          {this.state.entries.map((e, i) => this.renderItem(e, i))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);

