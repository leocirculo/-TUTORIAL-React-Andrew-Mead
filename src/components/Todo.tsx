import React from 'react';
import moment from 'moment';
import { Todo as TodoType } from './../interfaces';

interface Props {
  todo: TodoType;
  onToggleCompleted?: (id: string, completed: boolean) => void;
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
          onChange={() => {}}
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
    const { onToggleCompleted } = this.props;
    if (onToggleCompleted) {
      onToggleCompleted(this.props.todo.id, !this.props.todo.completed);
    }
  };
}
