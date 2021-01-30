import React from 'react'
import { useSelector } from 'react-redux'
import { userSearchSelector } from '../../userSearchSlice'
import SearchItem from '../SearchItem/SearchItem'
import SearchListStyle from './SearchList.style'

const SearchList = () => {
  const { searchResults } = useSelector(userSearchSelector)

  return (
    <SearchListStyle>
      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>
            <SearchItem {...user} />
          </li>
        ))}
      </ul>
    </SearchListStyle>
  )
}

export default SearchList
