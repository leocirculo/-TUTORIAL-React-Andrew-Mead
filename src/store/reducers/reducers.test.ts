import { searchReducer, todosReducer, showCompleted } from './reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        text: 'dog',
      }
      const res = searchReducer('', action);
      expect(res).toEqual(action.text);
    });
  });

  describe('todosReducer', () => {
    it('should add a todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'walk the dog',
      }
  
      const res = todosReducer([], action);
      expect(res).toHaveLength(1);
      expect(res[0].text).toEqual('walk the dog');
      
      const res2 = todosReducer(res, action);
      expect(res2).toHaveLength(2);
    })
    it('should add existing todos', () => {
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
  
      const res = todosReducer([], action);
      expect(res).toHaveLength(1);
      expect(res[0]).toEqual(todos[0]);
    })
    it('should remove a todo', () => {
      const action = {
        type: 'REMOVE_TODO',
        text: '123',
      }

      const res = todosReducer([{ id: '123', text: 'todo' }], action);
      expect(res).toHaveLength(0);
    })
    it('should toggle completed on a todo', () => {
      const todos = [{
        id: '1',
        text: 'walk the dog',
      }]
      const action = {
        type: 'TOGGLE_TODO',
        text: '1',
      };

      const res = todosReducer(todos, action);
      expect(res[0].completed).toBeTruthy();
      expect(res[0].completedAt).toBeTruthy();
      
      const res2 = todosReducer(res, action);
      expect(res[0].completed).not.toBeTruthy();
      expect(res[0].completedAt).not.toBeTruthy();
    });
  });
  describe('showCompleted', () => {
    it('should toggle show completed', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }
      let res = showCompleted(false, action);
      expect(res).toBeTruthy();
      res = showCompleted(true, action);
      expect(res).not.toBeTruthy();
    })
  });
}); 