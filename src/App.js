import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FeaturePage from "./components/feature-page/feature-page.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeaturePage />
      </div>
    );
  }
}

export default App;
