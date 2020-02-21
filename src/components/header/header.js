import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.jpeg';
import Button from '../button/button';

class Header extends Component {
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired
  };

  render() {
    return (
      <div style={{ 
        display: 'flex',
        padding: '14px 48px',
        position: 'sticky',
        top: '0',
        backgroundColor: 'white',
        zIndex: '999',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)'
      }}>
        <img style={{ height: '50px' }} src={logo} alt="Logo" />
        <span id="spacer" style={{ margin: 'auto' }} />
        { this.props.routes.map(e => {
          return (
            <Button
              key={e.id}
              text={e.label}
              isActive={this.props.history.location.pathname === e.path}
              onClick={() => { this.props.history.replace(e.path); }}
            />
          );
        }) }
      </div>
    );
  }
}

const HeaderWithRouter = withRouter(Header);
export default HeaderWithRouter;
