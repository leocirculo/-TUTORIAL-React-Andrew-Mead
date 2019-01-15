import React, { Component } from 'react';
import uuid from 'uuid/v1';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoSearch from './components/TodoSearch';
import { Todo } from './interfaces';
import TodoAPI from './api/TodoApi';

import './App.scss';

interface State {
  query: string;
  showCompleted: boolean;
  todos: Todo[];
}

export default class App extends Component {
  public state: State = {
    query: '',
    showCompleted: false,
    todos: TodoAPI.getTodos(),
  };

  public componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  public render() {
    const { todos, query, showCompleted } = this.state;
  
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, query);

    return (
      <div className="App">
        <TodoSearch
          onSearch={this.handleOnSearch}
          query={query}
          showCompleted={showCompleted}
        />
        <TodoList todos={filteredTodos} onToggle={this.toggleCompleted} />
        <AddTodo onSubmit={this.addTodo} />
      </div>
    );
  }

  private toggleCompleted = (id: string) => {
    const updatedTodos = this.state.todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  private addTodo = (text: string) => {
    const { todos } = this.state;

    this.setState({
      todos: [...todos, { id: uuid(), text, completed: false }],
    });
  };

  private handleOnSearch = (query: string, showCompleted: boolean) => {
    this.setState({ query, showCompleted });
  };
}
