import React from 'react';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { TodoList } from './components/TodoList';

Enzyme.configure({ adapter: new Adapter() });

describe('TodoApp', () => {
  it('should exists', () => {
    expect(App).toBeTruthy();
  })
  it('renders without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(TodoList)).toHaveLength(1);
  });
})
