import React, { Component } from 'react';
import logo from './logo.svg';
import flux from 'flux';
import './Counter.css';

class Counter extends Component {


  render() {
    return (
      <div className="App">
        <button type="button" class="btn btn-large btn-block btn-default">-</button>
        { 0 }
        <button type="button" class="btn btn-large btn-block btn-default">+</button>
      </div>
    );
  }

}

export default Counter;
