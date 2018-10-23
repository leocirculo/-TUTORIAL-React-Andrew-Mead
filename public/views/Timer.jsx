import React from 'react';
import Layout from './../components/Layout';

export default class Timer extends React.Component {
  render() {
    return (
      <Layout>
        <div className="countdown">
          <p>This is the timer</p>
        </div>
      </Layout>
    )
  }
};
