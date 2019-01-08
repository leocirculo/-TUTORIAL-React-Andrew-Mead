import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Todo } from './interfaces';
import './App.scss';

interface State {
  todos: Todo[];
}

export default class App extends Component {
  public state: State = {
    todos: [
      {
        id: 1,
        text: 'walk the dog',
      },
      {
        id: 2,
        text: 'feed the dog',
      },
      {
        id: 3,
        text: 'wash the dog',
      },
    ],
  };

  public render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <TodoList todos={todos} />
        <AddTodo onSubmit={this.addTodo} />
      </div>
    );
  }

  private addTodo = (text: string) => {
    const { todos } = this.state;

    this.setState({ todos: [...todos, { id: todos.length + 1, text }] });
  };
}
