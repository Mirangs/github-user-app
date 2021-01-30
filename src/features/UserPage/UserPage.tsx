import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import RepoList from './components/RepoList/RepoList'
import { fetchUserData, userPageSelector } from './userPageSlice'
import SearchForm from './components/SearchForm/SearchForm'
import UserPageStyles from './UserPage.style'

const UserPage = () => {
  const { login } = useParams<{ login: string }>()
  const dispatch = useDispatch()
  const { user, isLoading, error } = useSelector(userPageSelector)

  useEffect(() => {
    dispatch(fetchUserData(login))
  }, [dispatch, login])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <UserPageStyles>
      <Link className="back-link" to="/">
        Go Back
      </Link>
      <div className="col-left">
        <img className="user-image" src={user.image} alt="User avatar" />
      </div>
      <div className="col-right">
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Location: {user.location}</p>
        <p>{user.followersAmount} Followers</p>
        <p>Following {user.followingAmount}</p>
      </div>
      <p>Bio: {user.bio || '-'}</p>

      <SearchForm />
      <RepoList />
    </UserPageStyles>
  )
}

export default UserPage
