import React, { Component } from 'react';
import 'foundation-sites/dist/css/foundation.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoSearch from './components/TodoSearch';

import './App.scss';

export default class App extends Component {
  public render() {
    return (
      <div className="todo-app">
        <header className="todo-app__header">
          <h1>Todo App</h1>
        </header>
        <div className="todo-app__body">
          <div className="grid-x">
            <div className="cell medium-6 large-8 medium-offset-3 large-offset-2">
              <div className="container">
                <TodoSearch />
                <TodoList />
                <AddTodo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
