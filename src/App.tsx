import React, { Component } from 'react';
import TodoList from './components/TodoList';
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
    ],
  };

  public render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <TodoList todos={todos} />
      </div>
    );
  }
}
