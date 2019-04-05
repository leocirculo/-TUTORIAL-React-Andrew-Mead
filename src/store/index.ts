import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

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

let composeCond;

if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  composeCond = compose( applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__() );
} else {
  composeCond = applyMiddleware(thunk);
}

export const store = createStore(
  reducer,
  composeCond,
);