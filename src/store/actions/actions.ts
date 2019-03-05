
import { store } from '../index';
import { Todo } from './../../interfaces';
// SEARCH
export const setSearchText = (text: string) => {
  return {
    type: 'SET_SEARCH_TEXT',
    text,
  }
}
// CURD TODO
export const addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    text,
  }
}
export const addTodos = (todos: Todo[]) => {
  return {
    type: 'ADD_TODOS',
    todos,
  }
}
export const removeTodo = (id: string) => {
  return {
    type: 'REMOVE_TODO',
    text: id,
  }
}
export const toggleTodo = (id: string) => {
  return {
    type: 'TOGGLE_TODO',
    text: id,
  }
}
// TOGGLE COMPLETED
export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
}
// EXTRA
export const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH',
  }
}
export const completeLocationFetch = (url: string) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url,
  }
}

export const fetchLocation = async () => {
  store.dispatch(startLocationFetch());

  try {
    let resp = await fetch('https://api.ipify.org?format=json')
    let respJson = await resp.json();
    resp = await fetch(`http://api.ipstack.com/${respJson.ip}?access_key=cd3b83c2fe5fc1d2313b972dd0c2ba5e&format=1`);
    respJson = await resp.json();
    const gMapUrl = `http://maps.google.com/?q=${respJson.latitude},${respJson.longitude}`;

    store.dispatch(completeLocationFetch(gMapUrl));
  } catch (error) {
    console.log(error);
  }
}