import React from 'react';
import Layout from 'Components/Layout';
import Clock from 'Components/Clock';
import CountdownFrom from 'Components/CountdownForm';


export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countDownStatus: 'stopped',
    };
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { countDownStatus } = this.state;
    if (countDownStatus !== prevState.countDownStatus) {
      switch(countDownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  };

  render() {
    const { count } = this.state;
    return (
      <Layout>
        <div className="countdown">
          <Clock totalSeconds={count}></Clock>
          <CountdownFrom onSetCountdown={this.handleSetCountdown.bind(this)}></CountdownFrom>
        </div>
      </Layout>
    );
  };

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countDownStatus: 'started',
    });
  };

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ 
        count:  newCount >= 0 ? newCount : 0,
      });
    }, 1000);
  }
};
