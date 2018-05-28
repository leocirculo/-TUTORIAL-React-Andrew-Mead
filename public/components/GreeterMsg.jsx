import React from 'react';

class GreeterMsg extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  };
};

export default GreeterMsg;
