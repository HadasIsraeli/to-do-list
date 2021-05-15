import React, { Component } from 'react';
import Todos from './Todos'
import AddToDo from './AddToDo'
class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy milk' },
      { id: 2, content: 'complete data science part 8 ' }
    ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addToDo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="To-Do-App container">
        <h1 className="center white-text">TO DO List</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;