import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { Todo as TodoType } from './../interfaces';
import { State as StoreState } from './../store/index';
import { startToggleTodo } from './../store/actions/actions';
import TodoAPI from './../api/TodoApi';

interface Props {
  todos: TodoType[];
  showCompleted: boolean;
  search: string;
  startToggleTodo?: (id: string, completed: boolean) => void;
}

export class TodoList extends React.Component<Props> {
  public render() {
    return (
      <div className="container__body">
        {this.filteredTodos.length === 0 && (
          <p className="todo-list--empty">Nothing to do</p>
        )}
        {this.filteredTodos.length > 0 && (
          <ul className="todo-list">
            {this.filteredTodos.map(item => {
              return <Todo onToggleCompleted={this.handleOnToggleCompleted} todo={item} key={item.id} />;
            })}
          </ul>
        )}
      </div>
    );
  }

  private get filteredTodos() {
    const { todos, showCompleted, search } = this.props;
    return TodoAPI.filterTodos(todos, showCompleted, search);
  }

  private handleOnToggleCompleted = (id: string, completed: boolean) => {
    const { startToggleTodo } = this.props;
    if (startToggleTodo) {
      startToggleTodo(id, completed);
    }
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos,
    showCompleted: state.showCompleted,
    search: state.search,
  };
}

const mapDispatchToProps = {
  startToggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);