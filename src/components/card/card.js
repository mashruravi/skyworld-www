import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './card.scss';

export class Card extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='card-container'>
        <div className='card-header'>
          <h3>{this.props.title}</h3>
        </div>
        <div className='card-image'>
          <img src={this.props.image} alt='' />
        </div>
        <div className='card-body'>
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default Card;
