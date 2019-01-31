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

const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH',
  }
}
const completeLocationFetch = (url: string) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url,
  }
}
const fetchLocation = async () => {
  store.dispatch(startLocationFetch());

  let resp = await fetch('https://api.ipify.org?format=json')
  let respJson = await resp.json();
  resp = await fetch(`http://api.ipstack.com/${respJson.ip}?access_key=cd3b83c2fe5fc1d2313b972dd0c2ba5e&format=1`);
  respJson = await resp.json();
  const gMapUrl = `http://maps.google.com/?q=${respJson.latitude},${respJson.longitude}`;
  
  store.dispatch(completeLocationFetch(gMapUrl));
}

const mapReducer = (state = { isFetching: false, url: undefined }, action: any) => {
  switch(action.type) {
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

const reducer = combineReducers({
  search: searchReducer,
  todos: todosReducer,
  showCompleted: showCompleted,
  map: mapReducer,
});

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// Suscribe to changes
store.subscribe(() => {
  const state = store.getState();
  if (state.map.isFetching) {
    console.log('Loading...');
  }
});

fetchLocation();