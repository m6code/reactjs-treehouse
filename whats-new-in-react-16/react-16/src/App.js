import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';

class App extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong and it's not my fault!</h3>
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <StudentForm />
        </div>
      );
    }
  }
}

export default App;
