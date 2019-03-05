import { createStore, combineReducers } from 'redux';
import { searchReducer, todosReducer, showCompleted, mapReducer } from './reducers/reducers';
import { Todo } from './../interfaces';

export interface State {
  search: string;
  todos: Todo[];
  showCompleted: boolean;
  map?: string;
}

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