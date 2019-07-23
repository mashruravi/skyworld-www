import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './pages/home/home';
import Contact from './pages/contact/contact';

import './index.scss';

const routes = [
  { id: 'home', path: '/', label: 'Home', component: Home },
  { id: 'contact', path: '/contact', label: 'Contact Us', component: Contact }
];

function App() {
  return (
    <div>
      <Router basename="/skyworld-www">
        <Header routes={routes}/>
        { routes.map(e => (
          <Route key={e.id} path={e.path} exact component={e.component} />
        )) }
        <Footer />
      </Router>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string
};

ReactDOM.render(<App />, document.getElementById('root'));
