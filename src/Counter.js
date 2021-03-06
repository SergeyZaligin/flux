import React, { Component } from 'react';
import logo from './logo.svg';
import flux from 'flux';
import { Button, Collapse, Well } from 'react-bootstrap';
import './Counter.css';

class Counter extends Component {

  render() {
    return (
      <div className="App">
        <Button bsStyle="info">-</Button>
        &nbsp;{ 0 }&nbsp;
        <Button bsStyle="info">+</Button>
      </div>
    );
  }

}

export default Counter;
