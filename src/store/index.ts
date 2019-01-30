import { createStore, combineReducers } from 'redux';

type Todo = {
  id: number;
  text: string;
}

const searchReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.text;
    default: 
      return state;
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

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  text: 'search something',
});

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'Add a new todo',
  },
});
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 2,
    text: 'Another new todo',
  },
});
store.dispatch({
  type: 'REMOVE_TODO',
  id: 1,
});
store.dispatch({
  type: 'TOGGLE_SHOW_COMPLETED',
});
