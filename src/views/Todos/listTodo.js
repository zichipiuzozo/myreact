import React from "react";
import "./listTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

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
    let { editTodos, ListTodos } = this.state;

    let isEmptyObj = Object.keys(editTodos).length === 0;

    //save
    if (isEmptyObj === false && editTodos.id === todo.id) {
      let listTodoCopy = [...ListTodos];

      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      //Update object's name property.
      listTodoCopy[objIndex].title = editTodos.title;
      this.setState({
        ListTodos: listTodoCopy,
        editTodos: "",
      });
      toast.success("Update success!");
      return;
    }

    //edit
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
  handleOnchangeEditTodos = (event) => {
    let editTodoCopy = { ...this.state.editTodos };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodos: editTodoCopy,
    });
  };
  render() {
    let { ListTodos, editTodos } = this.state;
    let isEmptyObj = Object.keys(editTodos).length === 0;
    console.log("check empty object: ", isEmptyObj);
    return (
      <>
        <p>Simple to do app by Tuấn anh</p>

        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {ListTodos &&
              ListTodos.length > 0 &&
              ListTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {" "}
                        {index + 1} - {item.title}{" "}
                      </span>
                    ) : (
                      <>
                        {editTodos.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodos.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodos(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {" "}
                            {index + 1} - {item.title}{" "}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodos.id === item.id
                        ? "Save"
                        : "Edit"}
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
      </>
    );
  }
}

export default Color(ListTodo);
