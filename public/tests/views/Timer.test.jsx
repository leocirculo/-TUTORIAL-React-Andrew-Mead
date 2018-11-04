/* eslint-disable */
import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timer from 'Views/Timer';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  jest.spyOn(console, 'error');
  console.error.mockImplementation(() => { });
  jest.useFakeTimers();
})

afterEach(() => {
  console.error.mockRestore();
  jest.clearAllTimers();
});

describe('Timer', () => {
  it('should exists', () => {
    expect(Timer).toBeTruthy();
  });

  it('should start timer on started status', () => {
    const timer = shallow(<Timer />);
    const instance = timer.instance();
    instance.handleStatusChange('started');

    expect(instance.state.count).toBe(0);
    expect(instance.state.timerStatus).toBe('started');

    jest.advanceTimersByTime(2000);
    expect(instance.state.count).toBe(2);
  });
  it('should pause timer on paussed status', () => {
    const timer = shallow(<Timer />);
    const instance = timer.instance();

    instance.state.count = 1;
    
    instance.handleStatusChange('started');
    instance.handleStatusChange('paused');
    
    jest.advanceTimersByTime(10000);
    expect(instance.state.count).toBe(1);
    
  });
  it('should stop timer on stopped status', () => {
    const timer = shallow(<Timer />);
    const instance = timer.instance();

    instance.state.count = 10;
    
    instance.handleStatusChange('started');
    instance.handleStatusChange('stopped');
    
    expect(instance.state.count).toBe(0);
  });
});