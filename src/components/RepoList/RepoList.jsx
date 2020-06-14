import React from 'react';
import './RepoList.sass'

import RepoItem from '../RepoItem/RepoItem'

const List = ({ repositories }) => {
  
  const {items = []} = repositories

  const repoItems = items.map((repo) => {
    return (
      <RepoItem
        key={repo.id}
        id={repo.id}
        name={repo.full_name}
        stars={repo.stargazers_count}
        update={repo.updated_at}
        language={repo.language}
        url={repo.url}
      />
    )
  });

  return (
    <div className="repo-list">{repoItems}</div>
  );

}

export default List;