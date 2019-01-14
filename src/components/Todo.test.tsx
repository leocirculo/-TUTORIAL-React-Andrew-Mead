import Todo from './Todo';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo List', () => {
  it('should exist', () => {
    expect(Todo).toBeTruthy();
  });

  it('should call onToggle prop with id on click', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Todo onToggle={mockFn} todo={{ id: '1', text: 'test', completed: false }} />);

    const li = wrapper.find('.todo');
    li.simulate('click');

    expect(mockFn).toHaveBeenCalledWith('1');
  });
});
