import "./App.css";
import InputFieldComponent from "./components/common/inputFieldComponent";
import axios from "axios";
import { BASE_URL } from "./constants";
import React, { Component } from "react";

class App extends Component {
  state = {
    newTodo: "",
    todoList: [],
    loading: true,
  };

  componentDidMount() {
    this.loadTodoList();
  }

  render() {
    return (
      <div className="container">
        <InputFieldComponent
          name="new_todo"
          label="Nuova attività"
          type="text"
          value={this.state.newTodo}
          disabled={this.state.loading}
          onChange={this.handleInputChange}
        ></InputFieldComponent>
        <button className="btn btn-primary" onClick={this.handleSubmitNewTodo}>
          ADD
        </button>
        <ul className="list-group">
          {this.state.todoList.map((todo) => {
            return (
              <li key={todo.id} className="list-group-item">
                {todo.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleInputChange = (e) => {
    const newTodo = e.currentTarget.value;
    this.setState({ newTodo });
  };

  handleSubmitNewTodo = () => {
    this.setState({ loading: true });
    const newTodoReq = {
      description: this.state.newTodo,
      checked: true,
      userId: 1,
    };

    axios.put(BASE_URL + "todo/save", newTodoReq).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        this.loadTodoList();
      } else {
        this.setState({ loading: false });
      }
    });
  };

  loadTodoList = () => {
    this.setState({ loading: true });
    axios.get(BASE_URL + "todo/list").then((response) => {
      this.setState({
        todoList: response.data,
        loading: false,
        newTodo: "",
      });
    });
  };
}

export default App;
