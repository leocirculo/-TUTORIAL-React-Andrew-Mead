import TodoList from './TodoList';
import Todo from './Todo';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo List', () => {
  it('should exist', () => {
    expect(TodoList).toBeTruthy();
  });

  it('should render one todo component for each todo item', () => {
    const todos = [
      {
        id: '1',
        text: 'todo',
        completed: false,
      },
      {
        id: '2',
        text: 'todo',
        completed: false,
      },
    ];

    const wrapper = shallow(<TodoList todos={todos} />);

    expect(wrapper.find(Todo)).toHaveLength(2);
  });
});
