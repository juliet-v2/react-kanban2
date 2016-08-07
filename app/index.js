import React, { Component } from 'react';
import {render} from 'react-dom';

class Hello extends Component {
  render() {
    return (
           <h1>Hello World 3</h1>
  );
  }
}
render(<Hello />, document.getElementById('root'));