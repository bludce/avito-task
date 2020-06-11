import React, { Component } from 'react';

import './index.sass';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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