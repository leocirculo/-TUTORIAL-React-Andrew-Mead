type Todo = {
  id: number;
  text: string;
}

export const searchReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.text;
    default:
      return state;
  }
}

export const todosReducer = (state: Todo[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo] as any;
    case 'REMOVE_TODO':
      return state.filter((item: Todo) => item.id !== action.id);
    default:
      return state;
  }
}

export const showCompleted = (state = false, action: any) => {
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