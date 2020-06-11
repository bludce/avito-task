import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.sass';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import RepoList from './components/RepoList/RepoList'
import Repo from './components/Repo/Repo'

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
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="container">
            <Route exact path="/">
              <RepoList repositories={repositories} />
            </Route>
            <Route 
              exact
              path="/repository/:id"
              render={props => (
                <Repo {...props}
                  id={props.match.params.id}
                  />
                )}
            />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;