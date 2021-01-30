import React from 'react'
import { useSelector } from 'react-redux'
import { userPageSelector } from '../../userPageSlice'
import RepoItem from '../RepoItem/RepoItem'
import RepoListStyles from './RepoList.style'

const RepoList = () => {
  const { reposSliced } = useSelector(userPageSelector)

  if (!reposSliced.length) {
    return <p>There is no repos</p>
  }

  return (
    <RepoListStyles>
      <ul>
        {reposSliced.map((repo) => (
          <li key={repo.name}>
            <RepoItem {...repo} />
          </li>
        ))}
      </ul>
    </RepoListStyles>
  )
}

export default RepoList
