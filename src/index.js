import ReactDOM from 'react-dom';
import React from 'react';

import PropTypes from 'prop-types';
import Header from './components/header';
import Footer from './components/footer';

function App(props) {
  return (
    <div>
      <Header />
      <h1>Welcome to app: {props.title}!</h1>
      <Footer />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string
};

ReactDOM.render(<App title="www" />, document.getElementById('root'));
