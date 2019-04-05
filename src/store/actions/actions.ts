
import moment from 'moment';
import { store } from '../index';
import { Todo } from './../../interfaces';
import { firebaseRef } from './../../firebase';

// SEARCH
export const setSearchText = (text: string) => {
  return {
    type: 'SET_SEARCH_TEXT',
    text,
  }
}
// CURD TODO
export const addTodo = (todo: Todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  }
}

export const startAddTodo = (text: string) => {
  return (dispatch: any) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
    }
    const todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key!,
      }))
    });
  }
}

export const addTodos = (todos: Todo[]) => {
  return {
    type: 'ADD_TODOS',
    todos,
  }
}

export const startAddTodos = () => {
  return (dispatch: any) => {
    const todosRef = firebaseRef.child(`todos`);
    return todosRef.once('value', (snapshot) => {
      const todos: Todo[] = [];
      if (snapshot) {
        const todosRef = snapshot.val() || {};
        Object.keys(todosRef).forEach((id: string) => {
          todos.push({ id, ...todosRef[id] });
        });
      }
      dispatch(addTodos(todos));
    });
    
  }
}

export const removeTodo = (id: string) => {
  return {
    type: 'REMOVE_TODO',
    text: id,
  }
}

export const startToggleTodo = (id: string, completed: boolean) => {
  return (dispatch: any) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null,
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
}

export const updateTodo = (id: string, updates: any) => {  
  return {
    type: 'UPDATE_TODO',
    id,
    updates,
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