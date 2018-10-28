import React from 'react';

export default class CountdownFrom extends React.Component{
  onSubmit(e) {
    e.preventDefault();
    const { onSetCountdown } = this.props;
    const strSeconds = this.refs.seconds.value;
    if (strSeconds) {
      if (strSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds.value = '';
        onSetCountdown && onSetCountdown(parseInt(strSeconds, 10));
      } else {
        alert('it must be a number');
      }
    }
  }
  
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  };
};