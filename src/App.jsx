import React, { Component } from 'react';

import './index.sass';

import Header from './components/header/header'
import Footer from './components/footer/footer'

class App extends Component {

  componentDidMount = () => {
    
  }

  render() {
    
    return (
      <div className="app">
        <Header />
        <div className="container">
          {/* <List /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;