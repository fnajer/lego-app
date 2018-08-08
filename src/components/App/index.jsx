import React, { Component } from 'react';

import './styles.css';

import Header from '../Header';
import Slider from '../Slider';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
      </div>
    );
  }
}

export default App;
