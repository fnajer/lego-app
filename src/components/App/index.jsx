import React, { Component } from 'react';

import './styles.css';

import Header from '../Header';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;
