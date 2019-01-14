import TodoSearch from './TodoSearch';
import Enzyme, { mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo Search', () => {
  it('should exist', () => {
    expect(TodoSearch).toBeTruthy();
  });

  it('should call on Submit when text changes', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<TodoSearch onSearch={mockFn} query="something" showCompleted={true} />);
    const input = wrapper.find('.search-bar__input');
    (input.instance() as any).value = 'test';
    input.simulate('change');

    expect(mockFn).toHaveBeenCalledWith('test', true);
  });
  it('should call on Submit when checkbox changes', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<TodoSearch onSearch={mockFn} query="something" showCompleted={true} />);
    const input = wrapper.find('.show-completed__checkbox');
    (input.instance() as any).value = false;
    input.simulate('change');

    expect(mockFn).toHaveBeenCalledWith('something', false);
  });
});
