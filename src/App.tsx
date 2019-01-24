import React, { Component } from 'react';
import 'foundation-sites/dist/css/foundation.css';
import moment from 'moment';
import uuid from 'uuid/v1';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoSearch from './components/TodoSearch';
import { Todo } from './interfaces';
import TodoAPI from './api/TodoApi';
import './store';

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
      <div className="todo-app">
        <header className="todo-app__header">
          <h1>Todo App</h1>
        </header>
        <div className="todo-app__body">
          <div className="grid-x">
            <div className="cell medium-6 large-8 medium-offset-3 large-offset-2">
              <div className="container">
                <TodoSearch
                  onSearch={this.handleOnSearch}
                  query={query}
                  showCompleted={showCompleted}
                />
                <TodoList
                  todos={filteredTodos}
                  onToggle={this.toggleCompleted}
                />
                <AddTodo onSubmit={this.addTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private toggleCompleted = (id: string) => {
    const updatedTodos = this.state.todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  private addTodo = (text: string) => {
    const { todos } = this.state;

    this.setState({
      todos: [
        ...todos,
        { id: uuid(), text, completed: false, createdAt: moment().unix() },
      ],
    });
  };

  private handleOnSearch = (query: string, showCompleted: boolean) => {
    this.setState({ query, showCompleted });
  };
}
