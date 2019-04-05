import TodoApi from './TodoApi';
import moment from 'moment';

describe('test todo api', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(TodoApi).toBeTruthy();
  });

  describe('filterTodos', () => {
    const todos = [
      {
        id: '1',
        text: 'first test',
        completed: true,
        createdAt: moment().unix(),
      },
      {
        id: '2',
        text: 'second test',
        completed: false,
        createdAt: moment().unix(),
      },
      {
        id: '3',
        text: 'first test 2',
        completed: true,
        createdAt: moment().unix(),
      },
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
