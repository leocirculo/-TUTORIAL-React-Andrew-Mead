import React from 'react';
import GreeterMsg from 'GreeterMsg';
import GreeterForm from 'GreeterForm';

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || 'React Greeter',
      message: this.props.message || 'Default Message',
    };

    this.handleNewData = this.handleNewData.bind(this);
  }
  handleNewData(data) {
    this.setState(data);
  };
  render() {
    return (
      <div>
        <GreeterMsg name={this.state.name} message={this.state.message} />
        <GreeterForm onSubmit={this.handleNewData} />
      </div>
    );
  };
};

export default Greeter;