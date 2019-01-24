import { createStore } from 'redux';

const stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: [],
};

const reducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText,
      };
    default:
      return state;
  }
};

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
  searchText: 'Leo',
});
