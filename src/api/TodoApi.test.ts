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

  describe('filterTodos', () => {
    const todos = [
      {
        id: '1',
        text: 'first test',
        completed: true,
      },
      {
        id: '2',
        text: 'second test',
        completed: false,
      },
      {
        id: '3',
        text: 'first test 2',
        completed: true,
      }
    ];

    it('should return all items if showCompleted is true', () => {
      expect(TodoApi.filterTodos(todos, true, '')).toHaveLength(3);
    });
    it('should return only non-completed items if showCompleted is false', () => {
      expect(TodoApi.filterTodos(todos, false, '')).toHaveLength(1);
    });
    it('should return items that include query', () => {
      expect(TodoApi.filterTodos(todos, true, 'first')).toHaveLength(2);
    });
    it('should return no items if query is not included', () => {
      expect(TodoApi.filterTodos(todos, true, 'asdasdasdasd')).toHaveLength(0);
    });
  });
});
