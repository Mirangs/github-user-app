import React from 'react'
import { UserRepo } from '../../userPageSlice'
import RepoItemStyles from './RepoItem.style'

const RepoItem: React.FC<UserRepo> = ({
  name,
  forksAmount,
  starsAmount,
  repoLink,
}) => {
  return (
    <RepoItemStyles
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <p>{name}</p>
      <div className="col">
        <p>{forksAmount} Forks</p>
        <p>{starsAmount} Stars</p>
      </div>
    </RepoItemStyles>
  )
}

export default RepoItem
