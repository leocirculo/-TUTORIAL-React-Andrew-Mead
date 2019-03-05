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
      return [...state, {
        id: uuid(),
        text: action.text,
        completed: false,
        createdAt: moment().unix(),
      }] as any;
    case 'ADD_TODOS':
      return [...state, ...action.todos ? action.todos : []];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.text) {
          todo.completed = !todo.completed;
          todo.completedAt = todo.completed ? moment().unix() : undefined;
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