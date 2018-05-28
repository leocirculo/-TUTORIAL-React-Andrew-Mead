import React from 'react';

class GreeterForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const message = this.refs.message.value;

    this.props.onSubmit({
      ...name && { name },
      ...message && { message },
    })
    this.refs.name.value = '';
    this.refs.message.value = '';
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" ref="name" />
        </div>
        <div className="form-group">
          <label>Message: </label>
          <textarea ref="message"></textarea>
        </div>
        <button>SUBMIT</button>
      </form>
    );
  };
};

export default GreeterForm;
