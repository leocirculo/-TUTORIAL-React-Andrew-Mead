
import uuid from 'uuid';
import { store } from './../index';

export const changeName = (text: string) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    text,
  }
}
export const addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: uuid(),
      text,
    },
  }
}
export const removeTodo = (id: string) => {
  return {
    type: 'REMOVE_TODO',
    id,
  }
}

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
}

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