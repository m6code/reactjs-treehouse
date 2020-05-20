import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Teachers from './Teachers';
import Footer from './Footer';

class App extends Component {
  render() {
    return [
      <Header key="head" />,
      <Teachers key="teach" />,
      <Footer key="foot" />
    ];
  }
}

export default App;
