import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.sass';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import RepoList from './components/RepoList/RepoList'
import Repo from './components/Repo/Repo'
import Pagination from './components/Pagination/Pagination'

class App extends Component {

  state = {
    repositories: {},
    searchText: 'stars',
    totalPages: 0,
    currentPage: 1
  }

  componentDidMount = () => {
    const searchText = localStorage.getItem('searchText') ? localStorage.getItem('searchText') : this.state.searchText
    const currentPage = localStorage.getItem('currentPage') ? +localStorage.getItem('currentPage') : this.state.currentPage

    this.setState({
      searchText,
      currentPage
    })

    const page = this.state.currentPage || 1;
    this.loadPage(`https://api.github.com/search/repositories?q=${searchText}&per_page=10&page=${page}&sort=stars&order=desc`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      const searchText = localStorage.getItem('searchText') ? localStorage.getItem('searchText') : this.state.searchText
      const currentPage = localStorage.getItem('currentPage') ? +localStorage.getItem('currentPage') : this.state.currentPage

      this.loadPage(`https://api.github.com/search/repositories?q=${searchText}&per_page=10&page=${currentPage}&sort=stars&order=desc`);
    }
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    })
  }

  handleInputSubmit = async ({ key }) => {
    const { searchText } = this.state;
    let search = searchText
    
    if (searchText === '') {
      search = 'stars'
    } else {
      search = searchText
    }

    localStorage.setItem('searchText', search);
    localStorage.setItem('currentPage', 1);

    if (key === 'Enter') {
      this.setState({
        currentPage: 1
      })

      this.loadPage(`https://api.github.com/search/repositories?q=${search}&per_page=10&page=1&sort=stars&order=desc`)
     
    }
  }

  changeCurrentPage = (currentPage) => {
    localStorage.setItem('currentPage', currentPage);
    this.setState({
      currentPage
    })
  }

  loadPage = async (url) => {
    let response = await fetch(url);
    let repositories = await response.json();
    this.setState({
      repositories,
      totalPages: repositories.total_count
    })

    localStorage.setItem('repositories', JSON.stringify(repositories));
  }


  

  render() {

    const { repositories, totalPages, currentPage, searchText } = this.state;

    return (
      <BrowserRouter>
        <div className="app">
          <Header onChange={this.handleInputChange} onKeyPress={this.handleInputSubmit} value={searchText}/>
          <div className="container">
            <Route exact path="/">
              <RepoList repositories={repositories} />
              <Pagination totalPages={totalPages} currentPage={currentPage} changeCurrentPage={this.changeCurrentPage}/>
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