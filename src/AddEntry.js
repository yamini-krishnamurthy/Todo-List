import React from 'react';

class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAdd(this.state.value);
    this.setState({value: ""});
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Add a task..." value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>


    );
  }
}

export default AddEntry
