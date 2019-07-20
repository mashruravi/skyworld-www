import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export default function Button(props) {
  return (
    <div className="ctr-btn">
      <button
        className={props.isActive ? 'ctr-btn_active' : 'ctr-btn_inactive'}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};
