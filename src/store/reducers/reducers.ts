import uuid from 'uuid';
import moment from 'moment';

type Todo = {
  id: string;
  text: string;
  completed?: boolean;
  createdAt?: number;
  completedAt?: number;
}

type TextAction = {
  type: string;
  text?: string;
  todos?: Todo[];
  todo?: Todo;
  updates?: any;
  id?: string;
}

export const searchReducer = (state = '', action: TextAction) => {  
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.text;
    default:
      return state;
  }
}

export const todosReducer = (state: Todo[] = [], action: TextAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, 
        action.todo,
      ] as any;
    case 'ADD_TODOS':
      return [...state, ...action.todos ? action.todos : []];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates,
          }
        }
        return todo;
      })
    case 'REMOVE_TODO':
      return state.filter((item: Todo) => item.id !== action.text);
    default:
      return state;
  }
}

export const showCompleted = (state = false, action: TextAction) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export const mapReducer = (state = { isFetching: false, url: undefined }, action: any) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined,
      }
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url,
      }
    default:
      return state;
  }
}