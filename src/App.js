import React, { Component } from 'react';
import './App.css';
import QrElement from './components/QRCodeElement';


class App extends Component {
  render() {
    return (
        <div className="container">
          <QrElement/>
        </div>
    );
  }
}

export default App;