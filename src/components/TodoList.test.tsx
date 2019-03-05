import ConnectedTodoList, { TodoList } from './TodoList';
import Todo from './Todo';
import { Todo as TodoType } from './../interfaces';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';

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
        createdAt: moment().unix(),
      },
      {
        id: '2',
        text: 'todo',
        completed: false,
        createdAt: moment().unix(),
      },
    ];

    const wrapper = shallow(<TodoList todos={todos} showCompleted={true} search="" />);

    expect(wrapper.find(Todo)).toHaveLength(2);
  });

  it('should render a message when theres no todos', () => {
    const todos: TodoType[] = [];

    const wrapper = shallow(<TodoList todos={todos} showCompleted={true} search="" />);

    const message = wrapper.find('p');

    expect(message).toBeTruthy();
  });
});
