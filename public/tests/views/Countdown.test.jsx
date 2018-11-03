import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Countdown from 'Views/Countdown';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => { });
  jest.useFakeTimers();
})

afterEach(() => {
  console.error.mockRestore();
  jest.clearAllTimers();
});

describe('Countdown', () => {
  it('should exists', () => {
    expect(Countdown).toBeTruthy();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', () => {
      const countdown = shallow(<Countdown />);
      const instance = countdown.instance();
      instance.handleSetCountdown(10);
      
      expect(instance.state.count).toBe(10);
      expect(instance.state.countDownStatus).toBe('started');
      
      jest.advanceTimersByTime(1001);
      expect(instance.state.count).toBe(9);
    });
    it('shouldn\'t set count to less than zero', () => {
      const countdown = shallow(<Countdown />);
      const instance = countdown.instance();
      
      instance.handleSetCountdown(1);

      jest.advanceTimersByTime(3000);

      expect(instance.state.count).toBe(0);
    });
  });
});