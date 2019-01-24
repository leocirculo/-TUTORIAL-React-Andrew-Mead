import React from 'react';
import { Todo as TodoType } from './../interfaces';
import Todo from './Todo';

interface Props {
  todos: TodoType[];
  onToggle?: (id: string) => void;
}

export default class TodoList extends React.Component<Props> {
  public render() {
    const { todos, onToggle } = this.props;

    return (
      <div className="container__body">
        {todos.length === 0 && (
          <p className="todo-list--empty">Nothing to do</p>
        )}
        {todos.length > 0 && (
          <ul className="todo-list">
            {todos.map(item => {
              return <Todo todo={item} key={item.id} onToggle={onToggle} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}
