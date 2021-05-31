import React from 'react';
import { withTranslation } from 'react-i18next';
import axios from 'axios';
import Routes from './routes/Routes';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';

import './App.less';

/**
 * Root component for the application
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div className="dna-frontend-test-app">
      <Menu />
      <div className="app-content">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default withTranslation()(App);
