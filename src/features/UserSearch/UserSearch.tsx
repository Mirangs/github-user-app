import React from 'react'
import { useSelector } from 'react-redux'
import SearchList from './components/SearchList/SearchList'
import SearchForm from './components/SearchForm/SearchForm'
import { userSearchSelector } from './userSearchSlice'
import UserSearchStyles from './UserSearch.style'

const UserSearch = () => {
  const { error } = useSelector(userSearchSelector)
  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <UserSearchStyles>
      <h2 className="main-title">Github Searcher</h2>
      <SearchForm />
      <SearchList />
    </UserSearchStyles>
  )
}

export default UserSearch
