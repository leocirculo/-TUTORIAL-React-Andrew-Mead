import React from 'react';
import { Todo as TodoType } from './../interfaces';

interface Props {
  todo: TodoType;
}

export default class Todo extends React.Component<Props> {
  public render() {
    const { todo } = this.props;
    return <li className="todo">{todo.text}</li>;
  }
}
