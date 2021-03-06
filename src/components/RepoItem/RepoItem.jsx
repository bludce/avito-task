import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './RepoItem.sass'

const RepoItem = ({ id, name, stars, update, language }) => {

  return (
    <div className="repo-list__item item">
      <div className="item__title">
        <Link className="item__link" to={`/repository/${id}`}>{name}</Link>
      </div>
      <div className="item__content">
        <div className="item__stars">
          <svg aria-label="star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
          {stars}
        </div>
        <div className="item__language">{language}</div>
        <div className="item__update">Последнее обновление: {update}</div>
      </div>
      
    </div>
  );
}

RepoItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  stars: PropTypes.number,
  update: PropTypes.string,
  language: PropTypes.string,
}

RepoItem.defaultProps = {
  id: 0,
  name: '',
  stars: 0,
  update: '',
  language: '',
}

export default RepoItem