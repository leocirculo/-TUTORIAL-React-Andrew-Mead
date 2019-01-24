import React from 'react';
import moment from 'moment';
import { Todo as TodoType } from './../interfaces';

interface Props {
  todo: TodoType;
  onToggle?: (id: string) => void;
}

export default class Todo extends React.Component<Props> {
  public render() {
    const { todo } = this.props;
    return (
      <li
        className={`todo ${todo.completed ? 'todo--completed' : ''}`}
        onClick={this.handleOnClick}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.handleOnClick}
        />
        <div className="todo-text">
          <span>{todo.text} - </span>
          <small className="todo-text__date">
            {todo.completed && todo.completedAt
              ? `completed at: ${moment
                  .unix(todo.completedAt)
                  .format('MMM Do YYYY @ h:mm a')}`
              : `created at: ${moment
                  .unix(todo.createdAt)
                  .format('MMM Do YYYY @ h:mm a')}`}
          </small>
        </div>
      </li>
    );
  }

  private handleOnClick = () => {
    if (this.props.onToggle) {
      this.props.onToggle(this.props.todo.id);
    }
  };
}
