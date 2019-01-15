import AddTodo from './AddTodo';
import Enzyme, { mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Add Todo', () => {
  it('should exist', () => {
    expect(AddTodo).toBeTruthy();
  });
  it('should call on Submit if there is text', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<AddTodo onSubmit={mockFn} />);
    const input = wrapper.find('input');
    (input.instance() as any).value = 'test';
    input.simulate('change');

    wrapper.find('form').simulate('submit');

    expect(mockFn).toHaveBeenCalledWith('test');
  });
  it('should not call on Submit if there is no text', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<AddTodo onSubmit={mockFn} />);

    wrapper.find('form').simulate('submit');

    expect(mockFn).not.toHaveBeenCalledWith('test');
  });
});
