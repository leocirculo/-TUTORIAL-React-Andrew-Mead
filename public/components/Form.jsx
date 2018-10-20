import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form">
        <div className="form-group">
          <input 
            className="form-control"
            ref="location"
            type="text" 
            placeholder="Enter city name"
          />
        </div>
        <footer className="form-footer">
          <button className="button hollow expanded">Get Weather</button>
        </footer>
      </form>
    )
  }
}