import { setSearchText, addTodo, removeTodo, toggleShowCompleted, toggleTodo, addTodos } from './actions';

describe('Actions', () => {
  // SEARCH TEXT
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      text: 'some text',
    };

    const res = setSearchText('some text');

    expect(action).toEqual(res);
  });
  // CRUD TODO
  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'thing to do',
    };

    const res = addTodo('thing to do');

    expect(action).toEqual(res);
  });
  it('should generate add todos action', () => {
    const todos = [{
      id: '1',
      text: 'anything',
      completed: false,
      createdAt: 123,
    }];

    const action = {
      type: 'ADD_TODOS',
      todos,
    };

    const res = addTodos(todos);

    expect(action).toEqual(res);
  });
  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      text: '1',
    };

    const res = toggleTodo('1');

    expect(action).toEqual(res);
  });
  it('should generate remove todo action', () => {
    const action = {
      type: 'REMOVE_TODO',
      text: '1',
    };

    const res = removeTodo('1');

    expect(action).toEqual(res);
  });
  // DISPLAY COMPLETED
  it('should generate toggle completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    const res = toggleShowCompleted();

    expect(action).toEqual(res);
  });
});