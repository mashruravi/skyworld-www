import React from 'react';

import logo from '../assets/logo.jpeg';

export default function Header() {
  return (
    <div>
      <img style={{height: '100px'}} src={logo} alt="Logo" />
    </div>
  );
}
