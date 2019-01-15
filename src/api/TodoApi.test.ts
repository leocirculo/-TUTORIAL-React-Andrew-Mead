import TodoApi from './TodoApi';

describe('test todo api', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(TodoApi).toBeTruthy();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [
        {
          id: '1',
          text: 'test',
          completed: false,
        },
      ];
      TodoApi.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos')!);

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = [{ a: 'b' }];

      TodoApi.setTodos(badTodos as any);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstoragedata', () => {
      const actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todos if valid array in localstorage', () => {
      const todos = [
        {
          id: '1',
          text: 'test',
          completed: false,
        },
      ];

      localStorage.setItem('todos', JSON.stringify(todos));

      expect(TodoApi.getTodos()).toHaveLength(1);
    });
  });
});
