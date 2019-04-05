import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  setSearchText,
  addTodo,
  removeTodo,
  toggleShowCompleted,
  addTodos,
  updateTodo,
  startToggleTodo,
  startAddTodos,
} from './actions';
import { firebaseRef } from '../../firebase';

const createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '1',
        text: 'test',
        completed: false,
        createdAt: 0,
      },
    };

    const res = addTodo({
      id: '1',
      text: 'test',
      completed: false,
      createdAt: 0,
    });

    expect(action).toEqual(res);
  });

  // it('should create todo and dispatch ADD_TODO', (done) => {
  //   const store = createMockStore({});
  //   const todoText = 'My todo item';

  //   store.dispatch((startAddTodo(todoText) as any)).then(() => {
  //     const actions = store.getActions();
  //     expect(actions[0].type).toEqual('ADD_TODO');
  //     expect(actions[0].todo.text).toEqual('My todo item');
  //     done();
  //   }).catch(done);
  // })

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
      type: 'UPDATE_TODO',
      id: '1',
      updates: { completed: false},
    };

    const res = updateTodo(action.id, action.updates);

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

  describe('Tests with firebase todos', () => {
    let testTodoRef: any;
    
    beforeEach((done) => {
      const todosRef = firebaseRef.child('todos');
      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'something todo',
          completed: false,
          createdAt: 123321,
        })
      }).then(() => done()).catch(done);
    });
    afterEach((done) => {
      testTodoRef.remove().then(() => {
        done();
      })
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = startToggleTodo(testTodoRef.key, true);
      store.dispatch(action as any).then(() => {
        const mockActions = store.getActions();        
        expect(mockActions[0].updates.completed).toBeTruthy();
        expect(mockActions[0].updates.completedAt).toBeTruthy();
        done();
      }).catch(() => {
        done();
      })
    });

    it('should populate todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({});
      const action = startAddTodos();
      store.dispatch(action as any).then(() => {
        const mockActions = store.getActions();
        console.log(mockActions);
        
        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos).toHaveLength(1);
        expect(mockActions[0].todos[0].text).toEqual('something todo');
        done();
      }).catch(() => {
        done();
      })
    });
  })
});