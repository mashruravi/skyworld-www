import React, { Component } from 'react';
import Banner from './banner/banner';
import AboutUs from './about-us/about-us';
import Services from './services/services';

const pagewellStyle = {
  maxWidth: '1080px',
  margin: 'auto',
  padding: '24px',
};

export class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'rgba(0, 0, 0, 0.07)'}}>
        <Banner />
        <div style={pagewellStyle} className="pagewell">
          <Services />
          <div style={{height: '24px'}}></div>
          <AboutUs />
        </div>
      </div>
    );
  }
}

export default Home;
