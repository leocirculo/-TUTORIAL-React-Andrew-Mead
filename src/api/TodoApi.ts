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
  filterTodos(todos: Todo[], showCompleted: boolean, query: string) {
    let filteredTodos = [...todos];

    // Filter by showCompleted && query
    filteredTodos = filteredTodos.filter((todo) => {
      const cond1 = !todo.completed || showCompleted;
      const cond2 = todo.text.toLowerCase().includes(query.toLowerCase());
      return cond1 && cond2;
    })
    // Sort todos with non completed first
    return filteredTodos.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      return 0;
    });
  },
};
