import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    let styleObj = {
      height: "300px"
    };
    this.state = {style: styleObj};
    
  }

  componentDidMount() {
    console.log(this.refs.offsetHeight);
    let heightHeader = this.refs.OurHead.offsetHeight;
    this.setState({
      style: {
        height: heightHeader
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div style={this.state.style}></div>
        <header ref="OurHead" className="Header">
          <textarea></textarea>
          <div className="Square"></div>
        </header>
      </div>
    );
  }
}

export default Header;
