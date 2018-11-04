import React from 'react';
import Layout from 'Components/Layout';
import Clock from 'Components/Clock';
import Controls from 'Components/Controls';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, timerStatus: 'stopped' }; 
  }

  componentDidUpdate(prevProps, prevState) {
    const { timerStatus } = this.state;
    if (timerStatus !== prevState.timerStatus) {
      switch (timerStatus) {
      case 'started':
        this.startTimer();
        break;
      case 'stopped':
        this.setState({ count: 0 });
      // eslint-disable-next-line no-fallthrough
      case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
  }

  componentWillUnMount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  render() {
    const { count, timerStatus } = this.state;
    return (
      <Layout>
        <div className="countdown">
          <h1 className="page-title">Timer App</h1>
          <Clock totalSeconds={count}></Clock>
          <Controls
            countdownStatus={timerStatus}
            onStatusChange={this.handleStatusChange.bind(this)}
          ></Controls>
        </div>
      </Layout>
    );
  }

  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus,
    });
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
}
