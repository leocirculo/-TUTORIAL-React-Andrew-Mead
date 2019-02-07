import { createStore, combineReducers } from 'redux';
import { searchReducer, todosReducer, showCompleted, mapReducer } from './reducers';
import { fetchLocation } from './actions';

const reducer = combineReducers({
  search: searchReducer,
  todos: todosReducer,
  showCompleted: showCompleted,
  map: mapReducer,
});

export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// Suscribe to changes
store.subscribe(() => {
  const state = store.getState();
  if (state.map.isFetching) {
    console.log('Loading...');
  } else {
    console.log(state.map.url);
  }
});

fetchLocation();