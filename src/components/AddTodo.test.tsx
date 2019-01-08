import AddTodo from './AddTodo';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo List', () => {
  it('should exist', () => {
    expect(AddTodo).toBeTruthy();
  });
});
