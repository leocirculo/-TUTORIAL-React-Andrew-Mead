import React from 'react';
import Layout from 'Components/Layout';
import Clock from 'Components/Clock';
import CountdownFrom from 'Components/CountdownForm';


export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };
  
  handleSetCountdown(seconds) {
    this.setState({ count: seconds })
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
    )
  }
};
