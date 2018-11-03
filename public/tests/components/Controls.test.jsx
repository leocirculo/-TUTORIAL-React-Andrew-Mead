import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Controls from 'Components/Controls';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => { });
})

afterEach(() => {
  console.error.mockRestore();
});

describe('Controls', () => {
  it('should exists', () => {
    expect(Controls).toBeTruthy();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      const controls = shallow(<Controls countdownStatus="started"/>);
      const instance = controls.instance();

      expect(controls.find('.button.secondary')).toHaveLength(1);
      expect(controls.find('.button.primary')).toHaveLength(0);
    });
    it('should render start when paused', () => {
      const controls = shallow(<Controls countdownStatus="paused"/>);
      const instance = controls.instance();

      expect(controls.find('.button.secondary')).toHaveLength(0);
      expect(controls.find('.button.primary')).toHaveLength(1);
    });
  });
});