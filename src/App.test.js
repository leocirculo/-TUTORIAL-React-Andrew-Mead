import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should add todo to the todo state', () => {
  const wrapper = shallow(<App />);

  wrapper.instance().setState({ todos: [] });
  wrapper.instance().addTodo('test');

  expect(wrapper.instance().state.todos).toHaveLength(1);
});

it('should toggle todo to completed', () => {
  const todo = {
    id: 1,
    text: 'test',
    completed: false,
  };

  const wrapper = shallow(<App />);

  wrapper.instance().setState({ todos: [todo]});
  expect(wrapper.instance().state.todos[0].completed).toBeFalsy();
  
  wrapper.instance().toggleCompleted(1);

  expect(wrapper.instance().state.todos[0].completed).toBeTruthy();
})
