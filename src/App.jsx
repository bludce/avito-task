import React, { Component } from 'react';

import './index.sass';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import RepoList from './components/RepoList/RepoList'


class App extends Component {

  state = {
    repositories: {}
  }

  componentDidMount = async () => {
      let response = await fetch('https://api.github.com/search/repositories?q=stars&per_page=10&page=2&sort=stars&order=desc');
      let repositories = await response.json();
      this.setState({
        repositories
      })
  
  }

  render() {

    const { repositories } = this.state;
    
    return (
      <div className="app">
        <Header />
        <div className="container">
          <RepoList repositories={repositories} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;