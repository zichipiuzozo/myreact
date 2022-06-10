import React from "react";
import "./listTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Fixing bugs" },
      { id: "todo3", title: "running program" },
    ],
    editTodos: [],
  };
  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
    toast.success("Add successful!");
  };

  handleEditTodo = (todo) => {
    this.setState({
      editTodos: todo,
    });
  };

  handleOnDeleteTodo = (todo) => {
    let currentTodo = this.state.ListTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodo,
    });
    toast.success("Delete success!");
  };
  render() {
    let { ListTodos, editTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {" "}
                    {index + 1} - {item.title}{" "}
                  </span>
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleOnDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
