import React from 'react';
import { Todo as TodoType } from './../interfaces';

interface Props {
  todo: TodoType;
  onToggle?: (id: string) => void;
}

export default class Todo extends React.Component<Props> {
  public render() {
    const { todo } = this.props;
    return (
      <li className="todo" onClick={this.handleOnClick}>
        <input type="checkbox" defaultChecked={todo.completed} />
        <span>{todo.text}</span>
      </li>
    );
  }

  private handleOnClick = () => {
    if (this.props.onToggle) {
      this.props.onToggle(this.props.todo.id);
    }
  };
}
