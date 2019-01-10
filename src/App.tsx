import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoSearch from './components/TodoSearch';
import { Todo } from './interfaces';
import './App.scss';

interface State {
  query: string,
  showCompleted: boolean,
  todos: Todo[];
}

export default class App extends Component {
  public state: State = {
    query: '',
    showCompleted: false,
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
    const { todos, query, showCompleted } = this.state;

    return (
      <div className="App">
        <TodoSearch onSearch={this.handleOnSearch} query={query} showCompleted={showCompleted} />
        <TodoList todos={todos} />
        <AddTodo onSubmit={this.addTodo} />
      </div>
    );
  }

  private addTodo = (text: string) => {
    const { todos } = this.state;

    this.setState({ todos: [...todos, { id: todos.length + 1, text }] });
  };

  private handleOnSearch = (query: string, showCompleted: boolean) => {
    this.setState({ query, showCompleted });
  }
}
