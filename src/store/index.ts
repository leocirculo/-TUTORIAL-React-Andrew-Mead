import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

type Todo = {
  id: number;
  text: string;
}

const changeName = (text: string) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    text,
  }
}

const searchReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.text;
    default: 
      return state;
  }
}

const addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: uuid(),
      text,
    },
  }
}
const removeTodo = (id: string) => {
  return {
    type: 'REMOVE_TODO',
    id,
  }
}

const todosReducer = (state: Todo[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo] as any;
    case 'REMOVE_TODO':
      return state.filter((item: Todo) => item.id !== action.id);
    default:
      return state;
  }
}

const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
}

const showCompleted = (state = false, action: any) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

const reducer = combineReducers({
  search: searchReducer,
  todos: todosReducer,
  showCompleted: showCompleted,
});

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// Suscribe to changes
store.subscribe(() => {
  const state = store.getState();
});

store.dispatch(changeName('search something'));

store.dispatch(addTodo('Add a new todo'));
store.dispatch(addTodo('Add another todo'));

store.dispatch(removeTodo(store.getState().todos[0].id));

store.dispatch(toggleShowCompleted());
store.dispatch(toggleShowCompleted());
store.dispatch(toggleShowCompleted());
