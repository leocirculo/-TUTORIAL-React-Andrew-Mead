import React from 'react';
import PropTypes from 'prop-types'; 
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

export default class ErrorModal extends React.Component {
  componentDidMount() {
    const modalMarkup = (
      <div class="reveal" id="error-modal" data-reveal="">
        <h4>{ this.props.title || 'Error' }</h4>
        <p>{ this.props.message }</p>
        <button class="button hollow" data-close="">Okay</button>
      </div>
    )

    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);  

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return (
      <div></div>
    );
  };
};

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

