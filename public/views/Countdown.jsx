import React from 'react';
import Layout from 'Components/Layout';
import Clock from 'Components/Clock';
import CountdownFrom from 'Components/CountdownForm';
import Controls from 'Components/Controls';


export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped',
    };
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { countdownStatus } = this.state;
    if (countdownStatus !== prevState.countdownStatus) {
      switch (countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused': 
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  render() {
    const { count, countdownStatus } = this.state;
    return (
      <Layout>
        <div className="countdown">
          <h1 className="page-title">Countdown App</h1>
          <Clock totalSeconds={count}></Clock>
          {(countdownStatus !== 'stopped') && 
            <Controls 
              countdownStatus={countdownStatus}
              onStatusChange={this.handleStatusChange.bind(this)}
            ></Controls> }
          {(countdownStatus === 'stopped') && 
            <CountdownFrom onSetCountdown={this.handleSetCountdown.bind(this)}></CountdownFrom>}
        </div>
      </Layout>
    );
  };

  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus,
    });
  };

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  };

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ 
        count:  newCount >= 0 ? newCount : 0,
      });

      if (newCount === 0) this.setState({ countdownStatus: 'stopped'});
    }, 1000);
  }
};
