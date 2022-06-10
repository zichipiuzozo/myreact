import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnchangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handleOnclickAdd = () => {
    if (!this.state.title) {
      alert("missing title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />
        <button
          className="add"
          type="button"
          onClick={() => this.handleOnclickAdd()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
