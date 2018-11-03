import React from 'react';
import PropTypes from 'prop-types';

export default class Controls extends React.Component {
  render() {
    const { countdownStatus } = this.props;

    return (
      <div className="controls">
        {(countdownStatus === 'started') && 
          <button className="button secondary" onClick={this.onStatusChange('paused')}>PAUSE</button>}
        {(countdownStatus === 'paused') && 
          <button className="button primary" onClick={this.onStatusChange('started')}>START</button>}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>CLEAR</button>
      </div>
    );
  };

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  };
};

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};