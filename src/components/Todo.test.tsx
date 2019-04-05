import Todo from './Todo';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toBeTruthy();
  });

  it('should call onToggle prop with id on click', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Todo
        onToggleCompleted={mockFn}
        todo={{
          id: '1',
          text: 'test',
          completed: false,
          createdAt: moment().unix(),
        }}
      />
    );

    const li = wrapper.find('.todo');
    li.simulate('click');

    expect(mockFn).toHaveBeenCalledWith('1', true);
  });
});
