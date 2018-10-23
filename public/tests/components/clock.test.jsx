import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Clock from 'Components/Clock';
import TestUtils from 'react-dom/test-utils';

describe('Clock', () => {
  describe('render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      const el = ReactDOM.findDOMNode(clock);
      const text = el.querySelector('.clock-text');
      expect(text.innerHTML).toBe('01:02');
    });
  });
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format seconds when min/sec are less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});