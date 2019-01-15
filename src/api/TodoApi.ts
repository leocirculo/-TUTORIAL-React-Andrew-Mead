import { Todo } from '../interfaces';

function checkTodoType(todo: Todo) {
  const checkId = typeof todo.id === 'string';
  const checkText = typeof todo.text === 'string';
  const checkCompleted = typeof todo.completed === 'boolean';

  if (!checkId || !checkText || !checkCompleted) {
    return false;
  }
  return true;
}

export default {
  setTodos(todos: Todo[]) {
    try {
      todos.forEach((todo: any) => {
        if (!checkTodoType(todo)) {
          throw new Error(`todo item is invalid: ${JSON.stringify(todo)}`);
        }
      });
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      return error;
    }
  },
  getTodos() {
    const stringTodos = localStorage.getItem('todos');

    try {
      if (stringTodos) {
        const todos = JSON.parse(stringTodos);

        todos.forEach((todo: any) => {
          if (!checkTodoType(todo)) {
            throw new Error(`todo item is invalid: ${JSON.stringify(todo)}`);
          }
        });

        return todos;
      }
    } catch (error) {
      return error;
    }
    return [];
  },
};
