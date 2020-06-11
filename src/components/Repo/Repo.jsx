import React, { Component } from 'react';

import './Repo.sass'

class Repo extends Component {

  state = {
    repo: {},
    user: {},
    langs: {}
  };

  componentDidMount = async () => {
    const { id } = this.props
    let repositories = await fetch(`https://api.github.com/repositories/${id}`);
    let repo = await repositories.json();
    
    let languages = await fetch(`${repo.languages_url}`);
    let langs = await languages.json()

    let user = {  
      avatar: repo.owner.avatar_url,
      login: repo.owner.login,
      url: repo.owner.html_url
    }

    this.setState({
      repo,
      langs,
      user
    })

  }

  render () {

    const { repo, langs, user } = this.state
    const { name, stargazers_count, updated_at, description } = repo
    const { avatar, login, url } = user
    
    const arrLangs = Object.keys(langs)

    return (
      <div className="repo">
        <div className="repo__user user">
          <div className="user__image">
            <img src={avatar} alt=""/>
          </div>
          <div className="user__name">
            <a href={url} className="user__link" target="_blank">{login}</a>
          </div>
        </div>
        <div className="repo-content">
          <div className="repo-content__title">{name}</div>
          <div className="repo-content__meta meta">
            <div className="meta__star">
              <svg aria-label="star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
              {stargazers_count}
            </div>
            <div className="meta__update">{updated_at}</div>
          </div>
          <h2 className="repo-content__title">Описание</h2>
          <p className="repo-content__decription">
            {description}
          </p>

          <h2 className="repo-content__title">Используемые языки</h2>
          <div className="languages">
            {arrLangs.map((lang) => {
              return (
                <span className="languages__item" key={lang}>{lang}</span>
              )
            })}          
          </div>
        </div>
      </div>
    );
  }
}

export default Repo;