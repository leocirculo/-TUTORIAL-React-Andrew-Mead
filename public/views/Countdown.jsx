import React from 'react';
import Layout from 'Components/Layout';
import Clock from 'Components/Clock';


export default class Countdown extends React.Component {
  render() {
    return (
      <Layout>
        <div className="countdown">
          <Clock totalSeconds={129}></Clock>
        </div>
      </Layout>
    )
  }
};
