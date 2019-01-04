import React from 'react';
import { Todo as TodoType } from './../interfaces';
import Todo from './Todo';

interface Props {
  todos: TodoType[];
}

export default class TodoList extends React.Component<Props> {
  public render() {
    const { todos } = this.props;

    return (
      <ul className="todo-list">
        {todos.map(item => {
          return <Todo todo={item} key={item.id} />;
        })}
      </ul>
    );
  }
}
