import { Todo } from './../interfaces';

export default {
  setTodos(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  },
  getTodos() {
    const stringTodos = localStorage.getItem('todos');

    try {
      if (stringTodos) {
        const todos = JSON.parse(stringTodos);

        todos.forEach((todo: any) => {
          const checkId = typeof todo.id === 'string';
          const checkText = typeof todo.text === 'string';
          const checkCompleted = typeof todo.completed === 'boolean';

          if (!checkId || !checkText || !checkCompleted) {
            throw new Error('corrupted data');
          }
        });
        return todos;
      }
    } catch (error) {
      // tslint:disable-next-line
      console.log(error);
    }
    return [];
  },
};
