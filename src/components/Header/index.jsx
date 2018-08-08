import React, { Component } from 'react';

import './styles.css';

import Navbar from './../Navbar';
import Menu from './../Menu';

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Menu/>
      </div>
    );
  }
}

export default Header;

